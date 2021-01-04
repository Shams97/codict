import connectAtlas from "../../../lib/api/db/connect";
import wordsList from "../../../lib/api/db/schemas/newWord";

export default async function (req, res) {
  if (req.method === "GET") {
    try {
      // connect to DB
      await connectAtlas({ openToPublic: true });
      const sub_contributions = await wordsList
        .find()
        .select("list -_id")
        .lean()
        .exec();
      const mapped = sub_contributions.map((entry) => {
        return entry.list.length;
      });

      const count = mapped.reduce((acc, cur) => acc + cur);
      res.status(200).send({ isOk: true, message: count });
    } catch (e) {
      res.status(400).send({ isOk: false, message: e.message });
    }
  }
}
