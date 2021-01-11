import connectAtlas from "../../lib/api/db/connect";
import wordsList from "../../lib/api/db/schemas/newWord";

export default async function (req, res) {
  if (req.method === "PUT") {
    /********************************
     ********************************
     ******CREATE CUSTOM ERRORS*****
     ********************************
     ********************************
     */
    const not_integer = new Error();
    not_integer.name = "NotOneIntiger";

    try {
      // check if authed
      const like = req.body.data.like;
      if (
        Number.isInteger(like) &&
        !Number.isNaN(like) &&
        like > 0 &&
        like < 2
      ) {
        /********************************
         ********************************
         ******GET DATA AND ADD LIKE****
         ********************************
         ********************************
         */

        await connectAtlas({ user: true });

        const doc = await wordsList
          .findOne({ word: req.body.data.word.name })
          .exec();
        //this line updates like object
        doc.list[req.body.data.word.order].social[0].count += 1;
        await doc.save();
        res.status(200);
        res.end();
      } else {
        not_integer.message =
          "user provided a non intiger value. something is malicous here";
        throw not_integer;
      }
    } catch (e) {
      if (e.name === "NotOneIntiger") {
        // HANDLE CUSTOM ERRROR
        res.status(400);
        res.end();
      } else {
        res.status(400);
        // rest of errors
        res.end();
      }
    }
  }
}
