const knex = require("../db/knex.js");

module.exports = {
  index: function (req, res) {
    knex('users')
      .then((persons) => {
        res.render('index', { 'persons': persons });

        console.log(persons);
      })
  },

  getOne(req, res) {
    knex('users')
      .where('id', req.params.id)
      .then(user => res.json(user))
      console.log(user);
  },
  addOne(req, res) {
    knex('users')
      .insert(req.body)
      .returning('*')
      .then(newUser => res.json(newUser))
      console.log(newUser);
  },
  updateOne(req, res) {
    knex('users')
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then(updatedUser => res.json(updatedUser))
  },
  deleteuser(req, res) {
    knex('users')
      .where('id', req.params.id)
      .del()
      .returning('*')
      .then(deletedUser => res.json(deletedUser))
  }

}
