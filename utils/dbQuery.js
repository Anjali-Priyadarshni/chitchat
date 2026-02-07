const mysqldb = require('../config/mysql');

const executeQuery = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    mysqldb.query(sql, params, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

module.exports = executeQuery;