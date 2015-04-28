var db = require('./db/config');

var Impact = db.model.extend({
  tableName: 'impacts',
  hasTimestamps: true
});

module.exports = Impact;