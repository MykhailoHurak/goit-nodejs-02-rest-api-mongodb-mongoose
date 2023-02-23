const ContactModel = require("../../models/book")
const { HttpError } = require("../../helpers")
const { addSchema } = require("../../schemas")

const addBook = async (req, res) => {
        const { error } = addSchema.validate(req.body)
        if (error) {
            throw HttpError(400, "Missing required name field")
        }
        const result = ContactModel.create(req.body)
        
        res.status(201).json(result)
}

module.exports = addBook