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
};

RecordCollector.prototype.sellRecord = function(record){
  if (this.collection.includes(record)) {
    this.removeRecord(record);
    this.funds += record.price;
  } else {
    return "Sorry, the collector doesn't have this record."
  }
};

RecordCollector.prototype.arrangeRecords = function(){
  const sortedRecords =
  this.collection.sort(function(a, b){
    if(a.artist < b.artist) return -1;
    if(a.artist > b.artist) return 1;
    return 0;
  })
  return sortedRecords;
};

module.exports = RecordCollector;
