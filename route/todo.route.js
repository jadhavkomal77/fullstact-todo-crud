const router = require("express").Router()

const todocontroller = require("../controller/todo.controller")

router
    .get("/", todocontroller.getAllTodos)
    .post("/", todocontroller.addTodos)
    .put("/:id", todocontroller.updateTodos)
    .delete("/:id", todocontroller.deleteTodos)

module.exports = router