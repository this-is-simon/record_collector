const RecordCollector = require('../record_collector');
const Record = require('../record');
const assert = require('assert');

describe ('RecordCollector', function(){
  let recordCollector;
  let record1;
  let record2;
  let record3;


  beforeEach(function () {
    recordCollector = new RecordCollector({
    });
    record1 = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    record2 = new Record ({
      title: 'Appetite for Destruction',
      artist: 'Guns n Roses',
      genre: 'rock',
      price: 600
    });
    record3 = new Record ({
      title: 'Alabama Zootown',
      artist: 'Badaboom',
      genre: 'blues',
      price: 500
    });
  });

  it('should start with zero funds', function(){
    assert.strictEqual(recordCollector.funds, 0);
  });

  it('should be able to add funds', function(){
    recordCollector.addFunds(100);
    assert.strictEqual(recordCollector.funds, 100);
  });

  it('should start with an empty collection of records', function(){
    assert.deepStrictEqual(recordCollector.collection, []);
  });

  it('should be able to add a record to their collection', function() {
    recordCollector.addRecord(record1);
    assert.deepStrictEqual(recordCollector.collection, [record1])
  })

  it('should be able to find a record by title', function() {
    recordCollector.addRecord(record2);
    actual = recordCollector.findRecordByTitle('Appetite for Destruction');
    assert.deepStrictEqual(actual, [record2]);
  });

  it('should be able to remove a record', function() {
    recordCollector.addRecord(record1);
    recordCollector.addRecord(record2);
    recordCollector.removeRecord(record1);
    assert.deepStrictEqual(recordCollector.collection, [record2]);
  });

  it('should be able to buy a record', function() {
    recordCollector.addFunds(1100);
    recordCollector.buyRecord(record1);
    assert.deepStrictEqual(recordCollector.collection, [record1]);
    assert.deepStrictEqual(recordCollector.funds, 100);
  });

  it('should not be able to buy an expensive record', function() {
    recordCollector.addFunds(500);
    actual = recordCollector.buyRecord(record1);
    assert.deepStrictEqual(actual, "Sorry, this record is too expensive for you.")
    assert.deepStrictEqual(recordCollector.collection, []);
    assert.deepStrictEqual(recordCollector.funds, 500);
  });

  it('should be able to sell record', function() {
    recordCollector.addRecord(record1);
    recordCollector.addRecord(record2);
    recordCollector.sellRecord(record1);
    assert.deepStrictEqual(recordCollector.collection, [record2]);
    assert.deepStrictEqual(recordCollector.funds, 1000);
  });

  it('shouldn\'t be able to sell record if no record', function() {
    recordCollector.sellRecord(record1);
    actual = recordCollector.sellRecord(record1);
    assert.deepStrictEqual(actual, "Sorry, the collector doesn't have this record.")
    assert.deepStrictEqual(recordCollector.collection, []);
    assert.deepStrictEqual(recordCollector.funds, 0);
  });

  it('should arrange records alphabetically by artist', function(){
    recordCollector.addRecord(record1);
    recordCollector.addRecord(record2);
    recordCollector.addRecord(record3);
    recordCollector.arrangeRecords();
    assert.deepStrictEqual(recordCollector.collection, [record3, record1, record2]);
  })


});
