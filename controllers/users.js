const knex = require("../db/knex.js");

module.exports = {
    index: function(req, res) {
        knex('users')
        .then((persons) => {
          res.render('index', {'persons': persons});
      
        console.log(persons);
        })
      },
  
  getOne(req, res) {
    knex('users')
      .where('id', req.params.id)
      .then(user => res.json(user))
  },
addOne(req, res) {
    knex('users')
      .insert(req.body)
      .returning('*')
      .then(newuser => res.json(newUser))
  } /* ,
  updateOne(req, res) {
    knex('users')
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then(updatedUser => res.json(updatedUser))
  },
  addToCart(req, res) {
    knex('users')
      .where('id', req.params.id)
      .update({
        inCart: true
      })
      .returning('*')
      .then(updatedUser => res.json(updatedUser))
  },
  removeFromCart(req, res) {
    knex('users')
      .where('id', req.params.id)
      .update({
        inCart: false
      })
      .returning('*')
      .then(updateduser => res.json(updateduser))
  },
  deleteuser(req, res) {
    knex('users')
      .where('id', req.params.id)
      .del()
      .returning('*')
      .then(deletedUser => res.json(deletedUser))
  }
  */
}
