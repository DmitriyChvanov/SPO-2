const Router = require("express")
const router = new Router()

const contactRouter = require("./contactRouter")
const flyRouter = require("./flyRouter")
const hotelRouter = require("./hotelRouter")
const newsRouter = require("./newsRouter")
const ticketRouter = require("./ticketRouter")

router.use("/ticket",ticketRouter)
router.use("/hotel",hotelRouter)
router.use("/fly",flyRouter)
router.use("/news",newsRouter)
router.use("/contacts",contactRouter)

module.exports = router