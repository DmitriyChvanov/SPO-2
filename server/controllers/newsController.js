const uuid = require("uuid")
const path = require("path")
const {News_item} = require("../models/models")
const ApiError = require("../error/apiError")

class newsController {
    async create(req,res,next){
        try{
            const {description} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname,"..", "static", fileName))

            const news_item = await News_item.create({description, img: fileName})

            return res.json(news_item)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
        
    }
    async getAll(req,res){
        let news_item = await News_item.findAll()
        return res.json(news_item)
    }
}

module.exports = new newsController()