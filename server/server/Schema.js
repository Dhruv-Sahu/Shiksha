// const { v4: uuid } = require('uuid');
var mongoose = require('mongoose')
var Schema = new mongoose.Schema({
    Sid: String,
    FirstName: String,
    LastName: String,
    PublicAddress: String,
    Donation: Number,
    PhoneNumber: Number,
    Organisation: String,
    Type: String,
    TransactionHash: String
});

module.exports = mongoose.model('donater', Schema, 'Donaters');