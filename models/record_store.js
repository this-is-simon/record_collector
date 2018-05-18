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

module.exports = RecordStore;
