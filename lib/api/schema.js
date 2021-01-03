import Joi from "joi";

const link = Joi.object({
  link: Joi.string().min(5).uri({ scheme: "https" }).allow(""),
  title: Joi.string().min(2).max(20).allow(""),
});

const newFormSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  sound: Joi.string().min(2).max(20).allow(""),
  synonyms: Joi.array().items(Joi.string()),
  description: Joi.string().min(10).max(500).required(),
  books: Joi.array().items(link),
  videos: Joi.array().items(link),
  links: Joi.array().items(link),
  // add mongoose-like validation of "enum" for specific values to be inserted in usedIn
  usedIn: Joi.object({
    frameWorks: Joi.array().items(Joi.string()).max(11),
    os: Joi.array().items(Joi.string()).max(7),
    languages: Joi.array().items(Joi.string()).max(10),
    principles: Joi.array().items(Joi.string()).max(5),
  }),
  user: Joi.string().min(1).required(),
});

export default newFormSchema;

/**
 *
 * NOTE:
 * 1- "usedIn" properties can be expanded as i add more options to the form
 */
