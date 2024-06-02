require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/TKg6WAgGgSOm53hUa2FxrEmSVW8t5GS8',
      accounts: ['bef12ac4fb00dab6ef1338d033e549273718adc70eb77e15542034a40dbeee14'],
    },
  },
};