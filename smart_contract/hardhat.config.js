// https://eth-goerli.alchemyapi.io/v2/I64BCQr26iVr6Yq5mSU9MN0Fi2UeEkXW

require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/oFvx-r4J8mrRNlYPm7DvqRpBgoDgob5I',
      accounts:['e3fdbac51a607f34603c8ea8f94103f399b9d0be0bfe0cebfc3569112271b11d']
    }
  }
};
