require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain minor heavy clock forward ghost'; 
let testAccounts = [
"0x05e9e3d371e93a6a0e1f9bc9988b8f358be23f5b8610d49d7bb030abe5a40817",
"0x5e617bfa152f23111af5f1d478a48c2319673bbe12b8a1936f184b74f47f5730",
"0x3ff6eb5b4c4f9dacd24bd6e2b75311be96eafce6cfdc804a280cc979cc7f337b",
"0x8de63b50fa19f3ddecc1db41f4e3c1a8bbe5f600b5a1eb11cedde68b189a445d",
"0x83c38184cde9e3de274754229f3c7e25dfd07a11ab4fed23aa2283c875f0e0c9",
"0x98fca9ef80dbe697a00ced043bbced30547cb6023a0a66d1d052af55d1d851f3",
"0xfddf188cabe2f7d11b55bacc71f87e280b5ef9a177efff69322c2a020af4d779",
"0xa2c79fb825ce4a2cf590d894a843a129db094766442284c9f361a435853dd8b9",
"0x90771c16a7bf242b9f84c7546a5381f2c8fb6fce103e236f4884c2631eb63ec5",
"0x505eb9cd5a44658e9d2b53063dee05b4283a14a4ea324fafd9714703d7adb683"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

