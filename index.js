
const Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

var personal = web3.eth.personal

// console.log(web3);
// console.log(accounts);

// create account
personal.newAccount('password').then(console.log);

// verify account
personal.getAccounts().then(console.log);
