const { epresence } = require("../../models")
const { response, errorMessage, errorServer } = require("../../_helper/messages")
const joi = require("joi").extend(require("@joi/date"))
const { db, Sequelize } = require("../../database/config")

exports.presence = async (req, res) => {
    try {
        const schema = joi.object({
            type: joi.string().required(),
            time: joi.date().format("YYYY-MM-DD HH:mm:ss").required()
        })

        const {error} = schema.validate(req.body)
        if (error) return errorMessage(res, error.details[0].message)
        
        await epresence.create({...req.body,is_approve: "FALSE", id_user: req.user.id})
        response(res, data=req.body)
    } catch (error) {
        errorServer(res)
    }
}

exports.getPresence = async (req, res) => {
    try {
        const data = await db.query(
            `select id_user,nama_user,tanggal,
            jam_absen[1] as waktu_masuk, jam_absen[2] as waktu_pulang,
            status[1] as status_masuk, status[2] as status_pulang
            from (
            select epresences.id_user,date(epresences.time) as tanggal, array_agg(epresences.time::timestamp::time) as jam_absen,
            array_agg(case WHEN epresences.is_approve = 'TRUE' THEN 'APPROVE' WHEN epresences.is_approve = 'FALSE' THEN 'REJECT'
            END) as status, users.name as nama_user
            from epresences 
            join users on epresences.id_user = users.id 
            where users.id = :param
            group by id_user, date(time), users.name
            )
            as r order by id_user`,
            {
                replacements: {param: req.user.id},
                type: Sequelize.QueryTypes.SELECT
            }
        )
       
        response(res, {data}, "Success get data")
    } catch (error) {
        errorServer(res)
    }
}