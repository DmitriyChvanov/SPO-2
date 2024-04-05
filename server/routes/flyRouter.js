const Router = require("express")
const router = new Router()
const flyController = require("../controllers/flyController")

router.post("/",flyController.create)
router.get("/",flyController.getAll)
router.get("/:id",flyController.getOne)

module.exports = router