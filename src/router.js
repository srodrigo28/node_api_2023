const express = require('express')
const router = express.Router()

const tasksController = require('./controllers/tasksController')
const valida = require('./middlewares/tasksMiddleware')

const contasController = require('./controllers/contasController')

router.get('/', (req, res) => res.status(200).send('O router tá funcionando'))

/** Taks */
    router.get('/tasks', tasksController.getAll)
    router.post('/tasks', valida.validateBody, tasksController.createTask)

/** Contas */
    router.get('/contas', contasController.getContasAll)
    // router.post('/contas', contasController.createConta)

module.exports = router