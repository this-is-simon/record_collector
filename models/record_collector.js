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


// // temporary array holds objects with position and sort-value
// var mapped = list.map(function(el, i) {
//   return { index: i, value: el.toLowerCase() };
// })
//
// // sorting the mapped array containing the reduced values
// mapped.sort(function(a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });
//
// // container for the resulting order
// var result = mapped.map(function(el){
//   return list[el.index];
// });




module.exports = RecordCollector;
