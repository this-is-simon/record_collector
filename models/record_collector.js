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

RecordCollector.prototype.removeRecord = function(record){
  const remainingCollection = this.collection.filter((singleRecord) => {
    return singleRecord !== record
  });
  return this.collection = remainingCollection;
};

RecordCollector.prototype.buyRecord = function(record){
  if (this.funds > record.price){
    this.addRecord(record);
    this.funds -= record.price;
  } else {
    return "Sorry, this record is too expensive for you."
  }
}



module.exports = RecordCollector;
