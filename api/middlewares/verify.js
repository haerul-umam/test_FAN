const jwt = require("jsonwebtoken")

exports.verify = () => {
    return (
        (req, res, next) => {
            const reqHeader = req.header("Authorization")
            const token = reqHeader && reqHeader.split(" ")[1]

            if (!token) {
                return res.status(401).send({status:"failed",message:"Unauthorized"})
            }

            try {
                // store id user from token to req.user object
                const verified = jwt.verify(token, process.env.TOKEN_KEY)
                req.user = verified

                next()
                
            }catch(e) {
                res.status(400).send({status:"failed",message:"Invalid token"})
            }
        }
    )
}
