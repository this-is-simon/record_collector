const RecordStore = function(options) {
  this.name = options.name;
  this.funds = 0;
  this.collection = [];
}

RecordStore.prototype.addFunds = function (amount) {
  return this.funds += amount;
}

RecordStore.prototype.addToStock = function (record) {
  return this.collection.push(record);
}

RecordStore.prototype.removeFromStock = function (record) {
  const remainingStock = this.collection.filter((singleRecord) => {return singleRecord.title !== record.title});
  return this.collection = remainingStock;
}

RecordStore.prototype.sellRecord = function (record) {
  removeFromStock(this.record);
  addFunds(this.record.price);
}

module.exports = RecordStore;
