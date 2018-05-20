const RecordStore = function(options) {
  this.name = options.name;
  this.funds = 0;
  this.collection = [];
}

RecordStore.prototype.addFunds = function (amount) {
  return this.funds += amount;
}

RecordStore.prototype.addRecord = function (record) {
  return this.collection.push(record);
}

RecordStore.prototype.removeRecord = function (record) {
  const remainingStock = this.collection.filter((singleRecord) => {
  return singleRecord.title !== record.title
});
  return this.collection = remainingStock;
}

RecordStore.prototype.buyRecord = function(record){
  if (this.funds > record.price){
    this.addRecord(record);
    this.funds -= record.price;
  } else {
    return "Sorry, this record is too expensive for you."
  }
};

RecordStore.prototype.sellRecord = function (record) {
  if (this.collection.includes(record)) {
  this.removeRecord(record);
  this.addFunds(record.price);
  } else {
  return 'Sorry, we don\'t have that record.';
  };
}

module.exports = RecordStore;
