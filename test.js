'use strict';

var lisk = require('lisk-elements').default;

var b = lisk.APIClient.createBetanetAPIClient();
var your_passphrase = "YOUR PASSPHRASE HERE"
var transaction = lisk.transaction;
var tx = lisk.transaction.transfer({ amount: "1", recipientId: "54834883818072291L", data: "Hello World", passphrase: your_passphrase });

console.log(JSON.stringify(tx));

try {
    b.transactions.broadcast(tx);
} catch(err) {
    console.log(err.message); 
}
