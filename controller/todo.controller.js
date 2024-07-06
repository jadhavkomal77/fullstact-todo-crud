const Todo = require("../module/Todo")

exports.getAllTodos = async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "Todo fetch success", result })
}
exports.addTodos = async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo craete success" })
}
exports.updateTodos = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo update success" })
}
exports.deleteTodos = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "Todo delete success" })
}