const connection = require('./connection')

const getAall = async() => {
    const tasks = await connection.execute('SELECT * FROM tasks')
    return tasks
}

module.exports = {
    getAll
}