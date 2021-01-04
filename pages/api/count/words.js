import connectAtlas from "../../../lib/api/db/connect";
import wordsList from "../../../lib/api/db/schemas/newWord";

export default async function (req, res) {
  if (req.method === "GET") {
    try {
      // connect to DB
      await connectAtlas({ openToPublic: true });
      const count = await wordsList.estimatedDocumentCount();
      res.status(200).send({ isOk: true, message: count });
    } catch (e) {
      res.status(400).send({ isOk: false, message: e.message });
    }
  }
}
