
module.exports = function (app) {

const users = require('../controllers/users')
//const transactions = require('../controllers/transactions')


app.get('/users', users.index)
app.get('/users/:id', users.getOne)
app.post('/users', users.addOne)
app.delete('/users/:id', users.deleteUser)
/*
app.patch('/users/:id', users.updateOne)
app.patch('/transactions/add/:id', transactions.addTrans)
app.patch('/transactions/remove/:id', transactions.removeTrans)
app.delete('/transactions/:id', transactions.deleteTrans)
*/
}