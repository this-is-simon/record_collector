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






});
