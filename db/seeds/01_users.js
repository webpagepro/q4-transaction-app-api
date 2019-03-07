const fakeUsers = () => {
  const theUsers = []
  for (let i = 0; i < 10; i++) {
    theUsers.push({
      email: "email" + i + "@email.com",
      password: "password" + i
    })
  }
  return theUsers
}

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(fakeUsers());
    });
};