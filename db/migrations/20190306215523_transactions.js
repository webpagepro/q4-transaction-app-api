exports.up = function (knex, Promise) {
    return knex.schema.createTable('transactions', table => {
        table.increments();
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index();
        table.string('amount')//changed from integer to string
        table.string('type')
        table.string('business_name')
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('transactions')
};