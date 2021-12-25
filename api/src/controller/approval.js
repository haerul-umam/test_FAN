const { epresence,users } = require("../../models")
const { response, errorMessage, errorServer } = require("../../_helper/messages")


exports.approval = async (req, res) => {
    try {

        const dataToApprove = await epresence.findOne({
            where: {id: req.params.id},
            include: [{
                model: users,
                attributes: ["npp_supervisor"],
                as: "employe"
            }],
            raw: true,
            nest: true
        })
       
        if (dataToApprove.employe.npp_supervisor !== req.user.npp) return errorMessage(res,"Unauthorized")

        await epresence.update({is_approve:"TRUE"}, {where: {id: req.params.id}})
        response(res, {id: req.params.id}, "approval epresence")
    } catch (error) {
        errorServer(res)
    }
}