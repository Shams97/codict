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
