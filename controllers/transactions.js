const knex = require("../db/knex.js");

module.exports = {
  getAll(req, res) {
    knex('transactions')
      .orderBy('id', 'asc')
      .then(transactions => res.json(transactions))
  },
  getOne(req, res) {
    knex('transactions')
      .where('id', req.params.id)
      .then(transaction => res.json(transaction))
  },
  addOne(req, res) {
    knex('transactions')
      .insert(req.body)
      .returning('*')
      .then(newTransaction => res.json(newTransaction))
  },
  updateOne(req, res) {
    knex('transactions')
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then(updatedTransacton => res.json(updatedTransacton))
  },
  addToCart(req, res) {
    knex('transactions')
      .where('id', req.params.id)
      .update({
        inCart: true
      })
      .returning('*')
      .then(updatedTransaction => res.json(updatedTransaction))
  },
  removeFromCart(req, res) {
    knex('transactions')
      .where('id', req.params.id)
      .update({
        inCart: false
      })
      .returning('*')
      .then(updatedTransactiion => res.json(updatedTransaction))
  },
  deletetransaction(req, res) {
    knex('transactions')
      .where('id', req.params.id)
      .del()
      .returning('*')
      .then(deletedTransaction => res.json(deletedTransaction))
  }
}
