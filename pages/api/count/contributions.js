import connectAtlas from "../../../lib/api/db/connect";
import wordsList from "../../../lib/api/db/schemas/newWord";

export default async function (req, res) {
  if (req.method === "GET") {
    try {
      // connect to DB
      await connectAtlas({ openToPublic: true });
      // count contributions
      const sub_contributions = await wordsList
        .find()
        .select("list -_id")
        .lean()
        .exec();

      // count words
      const count_words = await wordsList.estimatedDocumentCount();
      const mapped = sub_contributions.map((entry) => {
        return entry.list.length;
      });

      const count_contributions = mapped.reduce((acc, cur) => acc + cur);
      res
        .status(200)
        .send({ words: count_words, contributions: count_contributions });
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }
}
