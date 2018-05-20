const RecordCollector = require('../record_collector');
const RecordStore = require('../record_store');
const Transaction = require('../transaction');
const Record = require('../record');
const assert = require('assert');

describe('Transaction', function(){
  let recordCollectorBuyer;
  let recordStoreSeller;
  let transaction1;

  let recordStoreBuyer;
  let recordCollectorSeller;
  let transaction2;

  let record1;

  beforeEach(function () {
    recordCollectorBuyer = new RecordCollector({});
    recordStoreSeller = new RecordStore({
      name: 'Emperor Records'
    });
    transaction1 = new Transaction({
      buyer: recordCollectorBuyer,
      seller: recordStoreSeller,
    });

    recordStoreBuyer = new RecordStore({
      name: 'Emperor Records'
    });
    recordCollectorSeller = new RecordCollector({});
    transaction2 = new Transaction({
      buyer: recordStoreBuyer,
      seller: recordCollectorSeller,
    });

    record1 = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
  });

  it('should have a buyer', function(){
    assert.deepStrictEqual(transaction1.buyer, recordCollectorBuyer);
  });

  it('should have a seller', function(){
    assert.deepStrictEqual(transaction1.seller, recordStoreSeller);
  });

  it('should be able to exchange record - shop sells to collector', function(){
    recordStoreSeller.addRecord(record1);
    recordCollectorBuyer.addFunds(1500);
    transaction1.exchangeRecord(record1);
    assert.deepStrictEqual(recordStoreSeller.funds, 1000);
    assert.deepStrictEqual(recordCollectorBuyer.funds, 500);
    assert.deepStrictEqual(recordStoreSeller.collection, []);
    assert.deepStrictEqual(recordCollectorBuyer.collection, [record1]);
  });

  it('should be able to exchange record - collector sells to shop', function(){
    recordCollectorSeller.addRecord(record1);
    recordStoreBuyer.addFunds(1500);
    transaction2.exchangeRecord(record1);
    assert.deepStrictEqual(recordCollectorSeller.funds, 1000);
    assert.deepStrictEqual(recordStoreBuyer.funds, 500);
    assert.deepStrictEqual(recordCollectorSeller.collection, []);
    assert.deepStrictEqual(recordStoreBuyer.collection, [record1]);
  });

  it('shouldn\'t be able to exchange record - shop sells to collector', function(){
    recordStoreSeller.addRecord(record1);
    recordCollectorBuyer.addFunds(200);
    transaction1.exchangeRecord(record1);
    assert.deepStrictEqual(recordStoreSeller.funds, 0);
    assert.deepStrictEqual(recordCollectorBuyer.funds, 200);
    assert.deepStrictEqual(recordStoreSeller.collection, [record1]);
    assert.deepStrictEqual(recordCollectorBuyer.collection, []);
  });


  it('shouldn\'t be able to exchange record - collector sells to shop', function(){
    recordCollectorSeller.addRecord(record1);
    recordStoreBuyer.addFunds(200);
    transaction2.exchangeRecord(record1);
    assert.deepStrictEqual(recordCollectorSeller.funds, 0);
    assert.deepStrictEqual(recordStoreBuyer.funds, 200);
    assert.deepStrictEqual(recordCollectorSeller.collection, [record1]);
    assert.deepStrictEqual(recordStoreBuyer.collection, []);
  });

});
