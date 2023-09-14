const path = require("path")

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src","database","database.db")
    },
    pool: {
      afterCreate: (connect, callback) => {
        connect.run("PRAGMA foreign_keys = ON", callback)
      }
    },
    migrations: {
      directory: path.resolve(__dirname, "src","database","knex","migrations")
    },
    useNullAsDefault: true
  },
};
