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
      const dislike = req.body.data.dislike;
      if (
        Number.isInteger(dislike) &&
        !Number.isNaN(dislike) &&
        dislike > 0 &&
        dislike < 2
      ) {
        /********************************
         ********************************
         ******GET DATA AND ADD DISLIKE****
         ********************************
         ********************************
         */

        //connect to DB
        await connectAtlas({ user: true });

        const doc = await wordsList
          .findOne({ word: req.body.data.word.name })
          .exec();
        // this line updates dislike object
        doc.list[req.body.data.word.order].social[1].count += 1;
        await doc.save();
        res.status(200);
        res.end({ ok: true });
      } else {
        not_integer.message =
          "user provided a non intiger value. something is malicous here";
        throw not_integer;
      }
    } catch (e) {
      // HANDLE CUSTOM ERROR
      if (e.name === "NotOneIntiger") {
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
