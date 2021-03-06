import mongoose from "mongoose";
const WordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 20,
      trim: true,
      required: [true, "Word name is required"],
    },

    synonyms: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.indexOf(this.name) === -1;
        },
        message: () => `Remove word name from synonyms set.`,
      },
    },
    description: {
      type: String,
      minLength: 10,
      maxLength: 500,
      required: [true, "Description is required"],
      trim: true,
    },
    books: {
      type: [
        {
          title: { type: String, minlength: 2, maxlength: 20 },
          link: { type: String, minlength: 5 },
        },
      ],
    },
    links: {
      type: [
        {
          title: { type: String, minlength: 2, maxlength: 20 },
          link: { type: String, minlength: 5 },
        },
      ],
    },
    videos: {
      type: [
        {
          title: { type: String, minlength: 2, maxlength: 20 },
          link: { type: String, minlength: 5 },
        },
      ],
    },
    usedIn: {
      frameWorks: { type: [String] },
      os: { type: [String] },
      languages: { type: [String] },
      principles: { type: [String] },
    },
    user: {
      type: String,
      minlength: 1,
      required: [true, "Your username is required"],
    },
    social: {
      type: [
        {
          name: String,
          count: { type: Number, default: 0 },
        },
      ],
      validate: {
        validator: function (v) {
          return v.length > 0 && v.length < 3;
        },
        message: () => "You are trying to alter data without any privilige.",
      },
    },
  },
  { _id: false }
);
const WordListSchema = new mongoose.Schema(
  {
    list: [WordSchema],
    word: String,
  },
  {
    timestamps: true,
    autoIndex: process.env.NODE_ENV !== "development" ? true : false,
    autoCreate: process.env.NODE_ENV !== "development" ? true : false,
    strictQuery: true,
    strict: true,
  }
);
// if model already exist in mongoose do not create it again (this leads to error: Cannot overwrite `word` model once compiled. )
export default mongoose.models.word || mongoose.model("word", WordListSchema);
