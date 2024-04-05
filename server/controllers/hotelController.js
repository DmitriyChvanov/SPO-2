const {Hotel_items} = require("../models/models")

class hotelController {
    async create(req,res){
        const {title,description, price} = req.body

        const hotel_items = await Hotel_items.create({title, description, price})

        return res.json(hotel_items)
    }
    async getAll(req,res){
        let hotel_items = await Hotel_items.findAll()
        return res.json(hotel_items)
    }
    async getOne(req,res){
        const {id} = req.params
        const hotel_item = await Hotel_items.findOne(
            {where:{id}}
        )
        return res.json(hotel_item)
    }
}

module.exports = new hotelController()