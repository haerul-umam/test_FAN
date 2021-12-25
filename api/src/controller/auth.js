const { users } = require("../../models")
const { response, errorMessage, errorServer } = require("../../_helper/messages")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const joi = require("joi")


exports.login = async (req, res) => {
    try {
        const schema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().min(6).required()
        })

        const {error} = schema.validate(req.body)
        if (error) return errorMessage(res, error.details[0].message)

        let msg = "Wrong email or password"

        const user = await users.findOne({where: {email: req.body.email}})
        if (!user?.password) return errorMessage(res, msg)
        
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) return errorMessage(res, msg)

        const token = jwt.sign({id: user.id, npp: user.npp}, process.env.TOKEN_KEY)

        const login = {email: user.email, token}
        response(res, {login})
    } catch (error) {
        errorServer(res)
    }
}