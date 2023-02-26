const connection = require('./connection')

const getContasAll = async() => {
    const [contas] = await connection.execute('SELECT * FROM tb_contas')
    return contas
}

const createConta = async (conta) => {
    const { descricao, valor } = conta;
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tb_contas(descricao, valor, stauts created_at) VALUES (?, ?, ?)'
    
    const createConta = await connection.execute(query, [descricao, valor, 'pendente', dateUTC] )
    return createConta
}

module.exports = {
    getContasAll,
    createConta
}