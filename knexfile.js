module.exports = {
    development: {
        client: "mysql",
        connection: {
            database: "transaction_app",
            host: 'localhost',
            port: '8889',
            user: 'root',
            password: 'root'
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',

        },
    },
    production: {
        client: 'mysql',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/production',
        },
    },
};
