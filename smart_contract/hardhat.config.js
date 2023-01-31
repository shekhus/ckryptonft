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
      accounts:['af5fef696139fe5518835d4f14b4a339653a78d335e6b4aa0066cb59f7403610']
    }
  }
};
