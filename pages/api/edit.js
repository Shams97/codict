import addExtras from "../../lib/api/new/addExtras";
import newFormSchema from "../../lib/api/schema";
import connectAtlas from "../../lib/api/db/connect";
import WordList from "../../lib/api/db/schemas/newWord";
import { ValidationError } from "joi";
import jwt from "next-auth/jwt";

export default async (req, res) => {
  if (req.method === "POST") {
    const not_allowd_to_edit = new Error();
    not_allowd_to_edit.name = "EditNotAllowed";

    const not_signed_in = new Error();
    not_signed_in.name = "AccessDenied";

    const secret = process.env.SECRET;

    try {
      const token = await jwt.getToken({ req, res });
      if (!token) {
        not_signed_in.message = "You need to Sing in First.";
        throw not_signed_in;
      }
      // connect to DB
      await connectAtlas({ user: true });
      // check if word does not exist in DB
      const notFound = await WordList.findOne({
        word: req.body.data.name,
      })
        .lean()
        .exec();
      if (notFound === null) {
        // does not exist. not allowed to add
        not_allowd_to_edit.message = `${req.body.data.name} does not exist. To add a new definition. Please consider adding this new term by typing in the serach box for the word and click the add button`;
        throw not_allowd_to_edit;
      }
      // validate
      await newFormSchema.validateAsync(req.body.data);
      // add social/community data
      addExtras(req, res);

      // does exist and can add a new definition for it
      const value = { ...req.body.data };
      // delete value.id;
      const doc = await WordList.findOne({ word: req.body.data.name });
      doc.list.push({ ...value });
      await doc.save();
      res.status(200);
      res.json({ isOk: true, message: "Successfully added" });
    } catch (e) {
      // not allowed to edit
      if (e.name === "EditNotAllowed") {
        res.status(400);
        res.send({ isOk: false, message: e.message });
      } //  validation error
      else if (e instanceof ValidationError) {
        res.status(400).send({
          isOk: false,
          message: e.message,
        });
      } else if (e.name === "AccessDenied") {
        res.status(401);
        res.send({ isOk: false, message: e.message });
      } else {
        // rest of errors
        res.status(400);
        res.send({ isOk: false, message: e.message });
      }
    }
  }
};
