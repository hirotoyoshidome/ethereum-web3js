# ethereum-web3js

## install
* geth
* nodejs
* web3.js

## 
* start up geth(create private net)

```
mkdir ethernet
cd ethernet
geth --dev --datadir .
```

* verify connect(attach) and create user

```
cd ethernet
geth attach ipc:geth.ipc
personal.newAccount()

// show accounts
eth.accounts

// show miner
eth.coinbase

// unlock
personal.unlockAccount(eth.accounts[1])
```
