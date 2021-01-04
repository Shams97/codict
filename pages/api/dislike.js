import connectAtlas from "../../lib/api/db/connect";
import wordsList from "../../lib/api/db/schemas/newWord";

const customError = new Error();
customError.name = "NotOneIntiger";

export default async function (req, res) {
  if (req.method === "PUT") {
    try {
      // check if authed
      const dislike = req.body.data.dislike;
      if (
        Number.isInteger(dislike) &&
        !Number.isNaN(dislike) &&
        dislike > 0 &&
        dislike < 2
      ) {
        //connect to DB
        await connectAtlas({ user: true });

        const doc = await wordsList
          .findOne({ word: req.body.data.word.name })
          .exec();
        // this line updates dislike object
        doc.list[req.body.data.word.order].social[1].count += 1;
        await doc.save();
        res.status(200);
        res.send({ isOk: true, message: "" });
      } else {
        customError.message =
          "user provided a non intiger value. something is malicous here";
        throw customError;
      }
    } catch (e) {
      if (e.name === "NotOneIntiger") {
        res.status(400);
        res.send({ isOk: false, message: e.message });
      } else {
        res.status(400);
        // rest of errors (db,..)
        res.send({ isOk: false, message: e.message });
      }
    }
  }
}
