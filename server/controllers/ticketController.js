const {Ticket_item} = require("../models/models")

class ticketController {
    async create(req,res){
        const {hotel_id, fly_id, contact_info, ticket_id, price} = req.body

        const ticket_item = await Ticket_item.create({hotel_id, fly_id, contact_info, ticket_id, price})

        return res.json(ticket_item)
    }
    async getAll(req,res){
        let ticket_item = await Ticket_item.findAll()
        return res.json(ticket_item)
    }
}

module.exports = new ticketController()