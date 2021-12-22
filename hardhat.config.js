require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks:{
    rinkeby:{
      url: "https://eth-rinkeby.alchemyapi.io/v2/HF-NvTRy4CmVICsVLZf7b3KtTlPGesTo",
      accounts: ["161ee40b854487bcbfdcdd01d2c420abacb7db77de29e8d887328180c0ceb2b4"]
        }
  }
};