const express = require("express")
const controller = require("./controller")

const routes = express.Router()
  
routes.get("/",controller.getAll)
routes.get("/:id",controller.getById)
// routes.post("/pessoas",controller.createPessoa)
// routes.put("/pessoas/:id",controller.updatePessoa)
// routes.delete("/pessoas/:id",controller.deletePessoa)

module.exports = routes