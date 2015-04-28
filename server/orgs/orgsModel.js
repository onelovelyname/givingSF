var db = require('./db/config');

var Org = db.model.extend({
  tableName: 'orgs',
  hasTimestamps: true
});

module.exports = Org;