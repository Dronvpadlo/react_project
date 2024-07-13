import Joi from "joi";

const postValidator = Joi.object({
    userId: Joi.number().min(1).max(10).required().messages({
        "number.min.base": 'USER ID ERROR: User ID cannot be less than 1',
        "number.max.base": 'USER ID ERROR: User ID cannot be more than 10'
    }),
    title: Joi.string().min(2).max(12).required().messages({
        "string.min" : "TITLE ERROR: title need have 2 or more letters",
        "string.max" : "TITLE ERROR: title need have  less than 12"
    }),
    body: Joi.string().min(2).max(164).required().messages({
        "string.min" : "BODY ERROR: body need have 2 or more letters",
        "string.max" : "BODY ERROR: body need have  less than 164"
    })
})
export default postValidator