const RecordCollector = require('../record_collector');
const RecordStore = require('../record_store');
const Transaction = require('../transaction');
const Record = require('../record');
const assert = require('assert');

describe('Transaction', function(){
  let buyerA;
  let sellerA;
  let transactionA;
  let buyerB;
  let sellerB;
  let transactionB;
  let record1;

  beforeEach(function () {
    buyerA = new RecordCollector({});
    sellerA = new RecordStore({
      name: 'Emperor Records'
    });
    transactionA = new Transaction({
      buyer: buyerA,
      seller: sellerA,
    });

    buyerB = new RecordStore({
      name: 'Emperor Records'
    });
    sellerB = new RecordCollector({});
    transactionB = new Transaction({
      buyer: buyerB,
      seller: sellerB,
    });

    record1 = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
  });

  it('should have a buyer', function(){
    assert.deepStrictEqual(transactionA.buyer, buyerA);
  });

  it('should have a seller', function(){
    assert.deepStrictEqual(transactionA.seller, sellerA);
  });

  it('should be able to exchange record - shop sells to collector', function(){
    sellerA.addRecord(record1);
    buyerA.addFunds(1500);
    transactionA.exchangeRecord(record1);
    assert.deepStrictEqual(sellerA.funds, 1000);
    assert.deepStrictEqual(buyerA.funds, 500);
    assert.deepStrictEqual(sellerA.collection, []);
    assert.deepStrictEqual(buyerA.collection, [record1]);
  });

  it('should be able to exchange record - collector sells to shop', function(){
    sellerB.addRecord(record1);
    buyerB.addFunds(1500);
    transactionB.exchangeRecord(record1);
    assert.deepStrictEqual(sellerB.funds, 1000);
    assert.deepStrictEqual(buyerB.funds, 500);
    assert.deepStrictEqual(sellerB.collection, []);
    assert.deepStrictEqual(buyerB.collection, [record1]);
  });

  it('shouldn\'t be able to exchange record - collector sells to shop', function(){
    sellerB.addRecord(record1);
    buyerB.addFunds(200);
    transactionB.exchangeRecord(record1);
    assert.deepStrictEqual(sellerB.funds, 0);
    assert.deepStrictEqual(buyerB.funds, 200);
    assert.deepStrictEqual(sellerB.collection, [record1]);
    assert.deepStrictEqual(buyerB.collection, []);
  });

});
