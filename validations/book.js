// Validation
const Joi = require('@hapi/joi')

var bookValidation = (req) => {
    let schema = Joi.object({
        task: Joi.string().min(2).required(),
        author: Joi.string().min(2).required(),
    })
    return schema.validate(req)
}
module.exports.bookValidation = bookValidation