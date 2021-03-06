const RecordStore = require('../record_store.js');
const Record = require('../record.js');
const assert = require('assert');

describe ('RecordStore', function(){
  let recordStore;
  let record1;
  let record2;

  beforeEach(function () {
    recordStore = new RecordStore({
      name: 'Emperor Records'
    });
    record1 = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    record2 = new Record({
      title: 'Appetite for Destruction',
      artist: 'Guns n Roses',
      genre: 'rock',
      price: 600
    });
  });

  it('should have a name', function(){
    assert.strictEqual(recordStore.name, 'Emperor Records')
  });

  it('should start with zero funds', function(){
    assert.strictEqual(recordStore.funds, 0)
  });

  it('should be able to add funds', function(){
    recordStore.addFunds(100);
    assert.strictEqual(recordStore.funds, 100)
  });

  it('should be able to add a record', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.strictEqual(recordStore.collection.length, 2)
  });

  it('should be able to remove a record', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.removeRecord(record1);
    assert.strictEqual(recordStore.collection.length, 1)
  });

  it('should be able to sell a record', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.strictEqual(recordStore.funds, 0);
    recordStore.sellRecord(record1);
    assert.strictEqual(recordStore.collection.length, 1);
    assert.strictEqual(recordStore.funds, 1000);
  });

  it('should not be able to sell record not in stock', function(){
    recordStore.addRecord(record1);
    assert.strictEqual(recordStore.funds, 0);
    recordStore.sellRecord(record2);
    assert.strictEqual(recordStore.sellRecord(record2), 'Sorry, we don\'t have that record.');
    assert.strictEqual(recordStore.collection.length, 1);
    assert.strictEqual(recordStore.funds, 0);
  });





});
