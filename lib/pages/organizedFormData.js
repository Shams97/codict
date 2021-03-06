/**
 *
 * @param {*} unsortedFormData
 *
 * Sorts form data collected from user input into a clearer mapping
 * to be used easily when sent over the http request on the API endpoint
 */
export default function organizeFormData(unsortedFormData, user = "") {
  const {
    name,
    usedIn,
    books,
    links,
    videos,
    synonyms,
    description,
  } = unsortedFormData;

  return {
    name,
    synonyms,
    description,
    books: Object.values(books),
    videos: Object.values(videos),
    links: Object.values(links),
    usedIn: {
      frameWorks: Array.from(usedIn["frameWorks"].values()),
      os: Array.from(usedIn["os"].values()),
      languages: Array.from(usedIn["languages"].values()),
      principles: Array.from(usedIn["principles"].values()),
    },
    user,
  };
}
