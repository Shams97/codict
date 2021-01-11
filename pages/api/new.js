import addExtras from "../../lib/api/new/addExtras";
import newFormSchema from "../../lib/api/schema";
import connectAtlas from "../../lib/api/db/connect";
import WordList from "../../lib/api/db/schemas/newWord";
import mongoose from "mongoose";
import { ValidationError } from "joi";
import jwt from "next-auth/jwt";

export default async (req, res) => {
  if (req.method === "POST") {
    /********************************
     ********************************
     ******CREATE CUSTOM ERRORS*****
     ********************************
     ********************************
     */
    const duplicate_word = new Error();
    duplicate_word.name = "Duplicate";

    const not_signed_in = new Error();
    not_signed_in.name = "AccessDenied";

    const secret = process.env.SECRET;
    try {
      /********************************
       ********************************
       ******CHECK IF SIGNED IN********
       ********************************
       ********************************
       */
      const token = await jwt.getToken({ req, res });
      if (!token) {
        not_signed_in.message = "You need to Sing in First.";
        throw not_signed_in;
      }

      /********************************
       ********************************
       ******GRAB DATA AND VALIDATE****
       ********************************
       ********************************
       */
      //connect to DB based on auth/role
      await connectAtlas({ user: true });
      // check for duplicates if any (same word/term added more than once)
      const duplicate = await WordList.findOne({ word: req.body.data.name })
        .lean()
        .exec();

      if (duplicate !== null) {
        // duplicate and won't be added
        duplicate_word.message = `'${req.body.data.name}' Already Exists. Please consider adding a new definition to the word by clicking the edit button on the word page`;
        throw duplicate_word;
      }
      // validate
      await newFormSchema.validateAsync(req.body.data);

      // add social/community data
      addExtras(req, res);

      // no duplication
      const doc = new WordList({
        list: { ...req.body.data },
        word: req.body.data.name,
      });

      /********************************
       ********************************
       ******SAVE TO DB AND RESPONDE***
       ********************************
       ********************************
       */
      await doc.save();
      await mongoose.connection.close();
      res.statusCode = 200;
      res.json({
        isOk: true,
        message: `Successfully added ${req.body.data.name}`,
      });
    } catch (e) {
      await mongoose.connection.close();

      // HANDEL VALIDATION ERR
      if (e instanceof ValidationError) {
        res.status(400).send({
          isOk: false,
          message: e.message,
        });
      } else if (e.name === "Duplicate") {
        // HANDLE DUPLICATE ERR
        res.status(400);
        res.send({ isOk: false, message: e.message });
      } else if (e.name === "AccessDenied") {
        // HANDLE AUTH ERR
        res.status(401);
        res.send({ isOk: false, message: e.message });
      } else {
        // HANDLE REST OF ERRORS
        res.status(400);
        res.send({ isOk: false, message: e.message });
      }
    }
  }
};
