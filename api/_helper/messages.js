module.exports = {
    errorMessage: (res, message) => {
        res.status(401).send({
            status: "failed",
            message
        })
    },
    response: (res, data, message) => {
        res.status(200).send({
            status : "success",
            message,
            ...data
        })
    },
    errorServer: (res) => {
        res.status(500).send({
            status: "failed",
            message: "Server error"
        })
    }
}