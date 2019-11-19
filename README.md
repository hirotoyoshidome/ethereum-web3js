# ethereum-web3js

## install
* geth
* nodejs
* web3.js

```
npm install web3 --save
npm install
(npm ci)
```

## command
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

## exec

* start up geth

```
mkdir -p ethernet/logs

geth  --rpc --rpcport 8545 --rpcapi "web3,eth,net,personal" --rpccorsdomain "*" --rpcaddr "0.0.0.0" --datadir "~/eth_testnet" --nodiscover --networkid 10 console 2>> logs/geth.log
```

* exec web3.js

```
node index.js
```


## documentation

https://web3js.readthedocs.io/en/v1.2.4/web3.html
