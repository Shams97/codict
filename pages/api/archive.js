import connectAtlas from "../../lib/api/db/connect";
import WordList from "../../lib/api/db/schemas/newWord";
import mongoose from "mongoose";

/**
 *
 * @param {*} options
 * Filter array of synonyms objects from duplciation
 */
function reduceSynonyms(options) {
  let reduced = [];
  options.forEach((cur) => {
    let pos = reduced.indexOf(reduced.find((e) => e.label === cur.label));
    if (pos === -1) reduced.push(cur);
  });

  return reduced;
}

export default async function archive(req, res) {
  if (req.method === "GET") {
    try {
      await connectAtlas({ user: true });
      const list = await WordList.find().select("word -_id").lean().exec();
      res.statusCode = 200;
      const clean = list.map((entry) => {
        return { value: entry.word, label: entry.word };
      });
      const test = await WordList.find().select("word list -_id");
      const groupedOptions = [];
      for (let i = 0; i < test.length; i++) {
        // loop word
        const options = [];
        for (let j = 0; j < test[i].list.length; j++) {
          // loop lists of definitions of word
          // if word has no synonyms, add word name as the only synonym (due to react-select in the UI)
          if (test[i].list[j].synonyms.length === 0) {
            options.push({
              label: test[i].word,
              value: test[i].word,
            });
          } else {
            for (let k = 0; k < test[i].list[j].synonyms.length; k++) {
              // loop synonyms of one definition of word
              options.push({
                label: test[i].list[j].synonyms[k],
                value: test[i].word,
              });
            }
          }
        }
        groupedOptions.push({
          label: test[i].word,
          options: reduceSynonyms(options),
        });
      }

      await mongoose.connection.close();
      res.statusCode = 200;
      res.json({ groupedOptions });
    } catch (e) {
      await mongoose.connection.close();
      res.statusCode = 400;
      res.json({ error: e.message });
    }
  }
}
