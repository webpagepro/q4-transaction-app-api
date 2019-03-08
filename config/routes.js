
module.exports = function (app) {

const users = require('../controllers/users')
const transactions = require('../controllers/transactions')


app.get('/users', users.index)
app.get('/users/:id', users.getUser)
app.post('/users', users.addUser)
app.delete('/users/:id', users.deleteUser)
app.patch('/users/:id', users.updateUser)

app.get('/transactions', transactions.getAllTrans)
app.get('/transactions/:id', transactions.getTrans)
app.post('/transactions/add/:id', transactions.addTrans)
app.patch('/transactions/:id', transactions.updateTrans)
app.delete('/transactions/:id', transactions.deleteTrans)

}