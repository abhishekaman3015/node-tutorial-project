module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "mysqldb1",
    DB: "abhi",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };