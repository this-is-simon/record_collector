const RecordCollector = require('../record_collector');
const RecordStore = require('../record_store');
const Transaction = require('../transaction');
const Record = require('../record');
const assert = require('assert');

describe('Transaction', function(){
  let buyerA;
  let sellerA;
  let transactionA;
  // let buyerB;
  // let sellerB;
  // let record1;
  // let record2;

  beforeEach(function () {
    buyerA = new RecordCollector({});
    sellerA = new RecordStore({
      name: 'Emperor Records'
    });
    transactionA = new Transaction({
      buyer: buyerA,
      seller: sellerA,
    });

  });

  it('should have a buyer', function(){
    assert.deepStrictEqual(transactionA.buyer, buyerA);
  });

});

// record1 = new Record({
//   title: 'Their Greatest Hits 1971 - 1975',
//   artist: 'Eagles',
//   genre: 'rock',
//   price: 1000
// });
// record2 = new Record({
//   title: 'Appetite for Destruction',
//   artist: 'Guns n Roses',
//   genre: 'rock',
//   price: 600
// });
