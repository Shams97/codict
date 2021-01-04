import connectAtlas from "../../lib/api/db/connect";
import WordList from "../../lib/api/db/schemas/newWord";
import mongoose from "mongoose";

export default async function (req, res) {
  if (req.method === "GET") {
    try {
      await connectAtlas({ user: true });
      const list = await WordList.find().select("word -_id").lean().exec();
      res.statusCode = 200;
      const clean = list.map((entry) => {
        return { value: entry.word, label: entry.word };
      });
      await mongoose.connection.close();
      res.statusCode = 200;
      res.json({ data: clean });
    } catch (e) {
      await mongoose.connection.close();
      res.statusCode = 400;
      res.json({ error: e.message });
    }
  }
}
