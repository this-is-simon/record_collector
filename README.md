# record_collector

Learning Objectives
Be able to create and unit test models
Be able to pass callback to the built in Array enumeration methods
Be able to select the appropriate Array enumeration method
Brief
Your task is to model the interaction between a record store and a record collector to enable them to buy and sell records from one another. You should include a transaction class that is responsible for handling the exchange of records. The store and collector should also have functionality that allows them to search and organise their records.

You have been given the tested Record model. You need to TDD the remaining models using Mocha.

#MVP
A record collector:

should start with no funds
should be able to add funds
should start with an empty collection of records
should be able to add a record to it's collection
should be able to find a record by title
should be able to remove a record from it's collection
should be able to buy a record if it has enough funds
should be able to sell a record if it has the record
A record store:

should have a name
should start with no funds
should be able to add funds
should start with an empty collection of records
should be able to add a record to its stock
should be able to sell a record if it has the record
A transaction:

should have a buyer
should have a seller
should be able handle an exchange of a record when the seller has the record and the buyer has enough funds
