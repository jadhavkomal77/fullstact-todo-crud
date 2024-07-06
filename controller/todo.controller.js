const Todos = require("../module/Todos")

exports.getAllTodos = async (req, res) => {
    const result = await Todos.find()
    res.json({ message: "Todo fetch success", result })
}
exports.addTodos = async (req, res) => {
    await Todos.create(req.body)
    res.json({ message: "Todo craete success" })
}
exports.updateTodos = async (req, res) => {
    await Todos.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo update success" })
}
exports.deleteTodos = async (req, res) => {
    await Todos.findByIdAndDelete(req.params.id)
    res.json({ message: "Todo delete success" })
}