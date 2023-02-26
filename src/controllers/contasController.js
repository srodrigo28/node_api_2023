const contasModel = require('../models/contasModel')

const getContasAll = async (_request, response) => {
    const contas = await contasModel.getContasAll()
    return response.status(200).json(contas)
}

const createConta = async(request, _response) => {
    const createConta = await contaModel.createConta(request.body)
    return createConta
}

module.exports = {
    getContasAll,
    createConta
}