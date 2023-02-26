const tasksModel = require('../models/tasksModel')

const getAll = async (_request, response) => {
    const tasks = await tasksModel.getAll()
    return response.status(200).json(tasks)
}
const getOne = async(req, res) => {
    const {id} = req.params;

    const tasks = await tasksModel.getOne(id)
    return res.status(200).json(tasks)
}
const createTask = async(request, response) =>{
    const createTask = await tasksModel.createTask(request.body)
    return response.status(201).json(request.body)
}
const deleteTask = async(req, res) => {
    const {id} = req.params;

    await tasksModel.deleteTask(id)
    return res.status(204).json()
}
const updateTask = async(req, res) => {
    const {id} = req.params

    await tasksModel.updateTask(id, req.body)
    return res.status(204).json()
}

module.exports = {
    getAll,
    getOne,
    createTask,
    deleteTask,
    updateTask
}