require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net push good option bottom swift'; 
let testAccounts = [
"0xcf4029c1f8982bfb1ae8047850094d11e55f1a128848ea2412ddef2eb7089d23",
"0x58441ae3f07213fdb45680177fc0cb70e6fa0954b66909efe61ad3d06026a26f",
"0x32ee6d504b9dbb2da6ee83db37ab6cfa507c5f611e6066ed9c6fc4432dd9ccaf",
"0x146f25e8884e8ba3ca6ffb890a0bd707adf9d94baa4f1ebe16fc22ecf1e00bfd",
"0x1cf5ad9861fb6e46ba1f67818b56c382ab5ebd4fffe828fa6244c4959f06cdf1",
"0xa2449c545dff41f11459c7437d6d9102a09ec226d64ec5f3d832dd8905f1691d",
"0xbbbff18147a1f41ab47258f4a6f98f7b3488ff3d08417595a7f2715dc9e80478",
"0x8d7f6e3aca150f760b09845923a928971fc63698f986877c020a9b0f98c022f5",
"0xe827efd43f9c7233f4ee3ea1d1f1b03174a2bb5568d58409e8ed871c4e8fb26f",
"0x326c1f40c705a5bbbc90a52f23114319f3de4388f2ecb326549444ea0cec5598"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
