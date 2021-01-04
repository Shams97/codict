import addExtras from "../../lib/api/new/addExtras";
import newFormSchema from "../../lib/api/schema";
import connectAtlas from "../../lib/api/db/connect";
import WordList from "../../lib/api/db/schemas/newWord";
import mongoose from "mongoose";
import { ValidationError } from "joi";
const customError = new Error();
customError.name = "duplicate";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      //connect to DB based on auth/role
      await connectAtlas({ user: true });
      // check for duplicates if any (same word/term added more than once)
      const duplicate = await WordList.findOne({ word: req.body.data.name })
        .lean()
        .exec();

      if (duplicate !== null) {
        // duplicate and won't be added
        customError.message = `'${req.body.data.name}' Already Exists. Please consider adding a new definition to the word by clicking the edit button on the word page`;
        throw customError;
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

      await doc.save();
      await mongoose.connection.close();
      res.statusCode = 200;
      res.json({
        isOk: true,
        message: `Successfully added ${req.body.data.name}`,
      });
    } catch (e) {
      await mongoose.connection.close();
      /**
        auth error
        server error
        db error
       * 
       */

      //  validation error
      if (e instanceof ValidationError) {
        res.status(400).send({
          isOk: false,
          message: e.message,
        });
      } else if (e.name === "duplicate") {
        // Duplicate error
        res.status(400);
        res.send({ isOk: false, message: e.message });
      } else {
        res.status(400);
        // rest of errors (db,..)
        res.send({ isOk: false, message: e.message });
      }
    }
  }
};
