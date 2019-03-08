const knex = require("../db/knex.js");

module.exports = {
  index: function (req, res) {
    knex('users')
      .then((persons) => {
        res.render('index', { 'persons': persons });

        console.log(persons);
      })
  },

  getUser(req, res) {
    knex('users')
      .where('id', req.params.id)
      .then(user => res.json(user))
  },

  addUser(req, res) {
    knex('users')
      .insert(req.body)
      .returning('*')
      .then(newUser => res.json(newUser))
  },

  updateUser(req, res) {
    knex('users')
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then(updatedUser => res.json(updatedUser))
  },

  deleteUser(req, res) {
    knex('users')
      .where('id', req.params.id)
      .del()
      .returning('*')
      .then(deletedUser => res.json(deletedUser))
  }

}
