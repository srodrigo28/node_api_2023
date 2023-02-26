const express = require('express')

const router = express.Router()

const tasksController = require('./controllers/tasksController')

router.get('/', (req, res) => res.status(200).send('O router tá funcionando'))

router.get('/tasks', tasksController.getAll)

module.exports = router