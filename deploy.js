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
    
};
deploy();
