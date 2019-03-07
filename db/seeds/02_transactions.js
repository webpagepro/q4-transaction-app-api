// const createTransactions = new Promise(function (resolve, reject) {
//   const transactions = []
//   let userId = 1
//   for (let i = 0; i < 100; i++) {
//     if (userId === 10) {
//       userId = 1
//     }
//     transactions.push({
//       user_id: userId,
//       amount: i,
//       type: "something",
//       business_name: "Business Name"
//     })
//     userId++
//   }
//   resolve(transactions)
// })

const createTransactions = () => {
  const transactions = []
  let userId = 1
  for (let i = 0; i < 100; i++) {
    if (userId === 10) {
      userId = 1
    }
    transactions.push({
      user_id: userId,
      amount: i,
      type: "something",
      business_name: "Business Name"
    })
    userId++
  }
  return transactions
}


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries

  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert(createTransactions());
    });
};
