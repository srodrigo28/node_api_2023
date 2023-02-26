const connection = require('../core/connection')

/** Lista todos */
const getAll = async() => {
    const [tasks] = await connection.execute('SELECT * FROM tasks')
    return tasks
}
/** Lista One */
const getOne = async(id) => {
    const [tasks] = await connection.execute(`SELECT * FROM tasks WHERE id = ${id}`)
    return tasks
}
/** Inseri */
const createTask = async (task) => {
    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)'
    
    const createTask = await connection.execute(query, [title, 'pendente', dateUTC] )
    return createTask
}
/** Deleta */
const deleteTask = async(id) => {
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id])
    return removedTask
}

/** Update */
const updateTask = async(id, task) => {
    const { title, status } = task
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
    const [updateTask] = await connection.execute(query, [title, status, id])
    return updateTask
}

module.exports = {
    getAll,
    getOne,
    createTask,
    deleteTask,
    updateTask
}