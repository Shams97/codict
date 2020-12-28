import Joi from "joi";

export const nameSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
});

export const soundSchema = Joi.object({
  sound: Joi.string().min(2).max(20).allow(""),
});

export const descriptionSchema = Joi.object({
  description: Joi.string().min(10).max(500).required(),
});

export const linkSchema = Joi.string()
  .min(5)
  .uri({ scheme: "https" })
  .allow("");

export const titleSchema = Joi.string().min(2).max(20).allow("");
