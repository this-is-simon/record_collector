const Transaction = function(options){
  this.buyer = options.buyer;
  this.seller = options.seller;
};

Transaction.prototype.exchangeRecord = function(record){
  if (this.buyer.funds > record.price){
    this.buyer.buyRecord(record);
    this.seller.sellRecord(record);
  } else {
    return "Sorry, buyer doesn't have enough funds."
  }

}


module.exports = Transaction;
