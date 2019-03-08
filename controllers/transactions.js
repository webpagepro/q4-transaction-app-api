const knex = require("../db/knex.js");

module.exports = {
  getAllTrans(req, res) {
    knex('transactions')
      .orderBy('id', 'asc')
      .then(transaction => res.json(transaction))
  },
  getTrans(req, res) {
    knex('transactions')
      .where('id', req.params.id)
      .then(transaction => res.json(transaction))
  },
  addTrans(req, res) {
    knex('transactions')
      .insert(req.body)
      .returning('*')
      .then(newTransaction => res.json(newTransaction))
  },
  updateTrans(req, res) {
    knex('transactions')
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then(updatedTransacton => res.json(updatedTransacton))
  },
  
  deleteTrans(req, res) {
    knex('transactions')
      .where('id', req.params.id)
      .del()
      .returning('*')
      .then(deletedTransaction => res.json(deletedTransaction))
  }
}
