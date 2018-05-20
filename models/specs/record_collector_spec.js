const RecordCollector = require('../record_collector');
const Record = require('../record');
const assert = require('assert');

describe ('RecordCollector', function(){
  let recordCollector;
  let record1;
  let record2;

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
  });

  it('should start with zero funds', function(){
    assert.strictEqual(recordCollector.funds, 0);
  });

  it('should be able to add funds', function(){
    recordCollector.addFunds(100);
    assert.strictEqual(recordCollector.funds, 100);
  });


});
