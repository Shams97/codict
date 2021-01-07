import WordList from "../../lib/api/db/schemas/newWord";
import connecAtlas from "../../lib/api/db/connect";
const formatDataForUI = (obj) => {
  const formated = obj.list.map((entry) => {
    return {
      seo: {
        description: entry.description,
        keywords: [...entry.synonyms, entry.name],
        title: entry.name,
      },
      db: {
        user: entry.user,
        name: entry.name,
        description: entry.description,
        social: entry.social.map((s, i) => {
          return {
            name: s.name,
            count: s.count,
            color: s.name === "like" ? "green" : "red",
            icon: s.name === "like" ? "thumbs-up" : "heart-broken",
          };
        }),
        used: [
          {
            name: "Languages",
            in: [
              ...entry.usedIn.languages.map((e) => ({
                name: e,
                prefix: "fab",
              })),
            ],
          },
          {
            name: "Frame Works",
            in: [
              ...entry.usedIn.frameWorks.map((e) => ({
                name: e,
                prefix: "fab",
              })),
            ],
          },
          {
            name: "OS",
            in: [...entry.usedIn.os.map((e) => ({ name: e, prefix: "fab" }))],
          },
          { name: "Principle/Field", in: [...entry.usedIn.principles] },
        ],
        articlesLinks: [
          ...entry.links.map((obj) => {
            return { dest: obj.link, title: obj.title };
          }),
        ],
        videosLinks: [
          ...entry.videos.map((obj) => {
            return { dest: obj.link, title: obj.title };
          }),
        ],
        booksLinks: [
          ...entry.books.map((obj) => {
            return { dest: obj.link, title: obj.title };
          }),
        ],
        synonyms: entry.synonyms,
      },
    };
  });
  // add "edit" button layout meta data
  formated.map((entry) => {
    entry.db.social.push({ name: "edit", icon: "edit", color: "secondary" });
    return entry;
  });
  return formated;
};
export default async function (req, res) {
  if (req.method === "GET") {
    const {
      query: { id },
    } = req;
    try {
      await connecAtlas({ user: true });

      const doc = await WordList.findOne({ word: id })
        .select("list")
        .lean()
        .exec();
      const formated = formatDataForUI(doc);
      res.status(200);
      res.send({ formated });
    } catch (e) {
      res.status(200);
      res.send({ formated: null });
    }
  }
}
