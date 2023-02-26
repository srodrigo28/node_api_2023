const tasksModel = require('../models/tasksModel')

const getAll = async (_request, response) => {
    
    const tasks = await tasksModel.getAll()
    
    return response.status(200).json(tasks)

}

const createTask = async(request, response) =>{
    const createTask = await tasksModel.createTask(request.body)
    return response.status(201).json(request.body)
}

module.exports = {
    getAll,
    createTask
}