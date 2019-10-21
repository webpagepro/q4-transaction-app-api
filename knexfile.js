module.exports = {
    development: {
        client: "mysql",
        connection: {
            database: "",
            host: '',
            port: '',
            user: '',
            password: ''
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
