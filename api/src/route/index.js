const router = require("express").Router()
const { verify } = require("../../middlewares/verify")
const { login } = require("../controller/auth")
const { presence, getPresence } = require("../controller/presence")
const { approval } = require("../controller/approval")

router.post("/login", login)
router.post("/presence", verify(), presence)
router.get("/presence", verify(), getPresence)
router.post("/approval/:id", verify(), approval)


module.exports = router