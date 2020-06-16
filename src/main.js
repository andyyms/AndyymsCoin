const {BlockChain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('ce3ca6cc87ceebae559e49f38466ca802046052852fdb20384e250fd74f4e4cc');
const myWalletAddress = myKey.getPublic('hex');

console.log('myWalletAddress: ' + myWalletAddress);

let andyymsCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
andyymsCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
andyymsCoin.minePendingTransaction(myWalletAddress);

console.log('\nBalance of xavier is', andyymsCoin.getBalanceOfAddress(myWalletAddress));

// andyymsCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', andyymsCoin.isChainBlock());