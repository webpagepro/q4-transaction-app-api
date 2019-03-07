
module.exports = function (app) {

const users = require('../controllers/users')
//const transactions = require('../controllers/transactions')


app.get('/users', users.index)
app.get('/users/:id', users.getOne)
app.post('/users', users.addOne)
/*
app.patch('/users/:id', users.updateOne)
app.patch('/transactions/add/:id', transactions.addTrans)
app.patch('/transactions/remove/:id', transactions.removeTras)
app.delete('/transactions/:id', transactions.deleteTrans)
*/
}