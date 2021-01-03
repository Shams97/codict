export default function addExtras(req) {
  req.body.data.social = [
    { name: "like", count: 0 },
    { name: "dislike", count: 0 },
  ];
}
