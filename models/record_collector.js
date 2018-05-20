const RecordCollector  = function (options) {
  this.funds = 0;
  this.collection = [];
};

RecordCollector.prototype.addFunds = function(amount) {
  return this.funds += amount;
}

RecordCollector.prototype.addRecord = function(record) {
  return this.collection.push(record);
}

RecordCollector.prototype.findRecordByTitle = function(title) {
  const foundRecord = this.collection.filter((singleRecord) => {
    return singleRecord.title === title;
  });
  return foundRecord;
}

module.exports = RecordCollector;
