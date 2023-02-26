const express = require('express')
const router = express.Router()

const tasksController = require('./controllers/tasksController')
const validaUpdate = require('./middlewares/tasksMiddleware')
const valida = require('./middlewares/tasksMiddleware')

router.get('/', (_req, res) => res.status(200).send('O router tá funcionando'))

/** Taks ROTAS*/
    router.get('/tasks', tasksController.getAll)
    router.post('/tasks', valida.validateBody, tasksController.createTask)

    router.delete('/tasks/:id', tasksController.deleteTask)
    router.get('/tasks/:id', tasksController.getOne) /** Conta propria */
    router.put('/tasks/:id', validaUpdate.validateUpdateBody, tasksController.updateTask)

module.exports = router