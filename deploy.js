const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('.compile');

const provider = new HDWalletProvider(
    // *Account mnemonic*,
    'https://rinkeby.infura.io/v3/b74b7e8c46f8498482f071001a4239e0'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

   const result = await new web3.eth.Contract(JSON.parte(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] })

    console.log('Contract deployted to', result.options.address);
    provider.engine.stop();

};
deploy();
