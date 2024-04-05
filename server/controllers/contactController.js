const {Contacts_info} = require("../models/models")

class contactController {
    async create(req,res){
        const {phone_number, first_name, last_name, birth_date, email} = req.body

        const contact_info = await Contacts_info.create({phone_number, first_name, last_name, birth_date, email})

        return res.json(contact_info)
    }
    async getAll(req,res){
        let contact_info = await Contacts_info.findAll()
        return res.json(contact_info)
    }
}

module.exports = new contactController()