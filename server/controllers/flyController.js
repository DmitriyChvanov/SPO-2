const {Fly_items} = require("../models/models")

class flyController {
    async create(req,res){
        const {title,from, where, departure, price} = req.body

        const fly_items = await Fly_items.create({title, from, where, departure, price})

        return res.json(fly_items)
    }
    async getAll(req,res){
        let fly_items = await Fly_items.findAll()
        return res.json(fly_items)
    }
    async getOne(req,res){
        const {id} = req.params
        const fly_item = await Fly_items.findOne(
            {where:{id}}
        )
        return res.json(fly_item)
    }
}

module.exports = new flyController()