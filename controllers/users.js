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
      .insert({
          "email": req.body.email,
          "password":req.body.password
      })
    //  .returning('*')
      .then(newUser => res.json(newUser))
  },
  updateOne(req, res) {
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
