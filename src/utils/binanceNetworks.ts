interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}

export const BinanceNetworks: {
  ethMain: AddEthereumChainParameter;
  main: AddEthereumChainParameter;
  test: AddEthereumChainParameter;
} = {
  main: {
    chainName: "Ethereum Mainnet",
    rpcUrls: [
      "https://eth-mainnet.public.blastapi.io",
      "https://rpc.ankr.com/eth",
      "https://eth-rpc.gateway.pokt.network",
      "https://main-rpc.linkpool.io",
      "https://mainnet-nethermind.blockscout.com",
      "https://ethereumnodelight.app.runonflux.io",
      "https://mainnet.eth.cloud.ava.do",
      "https://nodes.mewapi.io/rpc/eth",
      "https://api.mycryptoapi.com/eth",
      "https://rpc.flashbots.net",
      // "https://bsc-dataseed3.ninicoin.io",
      // "https://bsc-dataseed4.ninicoin.io",
      // "wss://bsc-ws-node.nariox.org",
    ],
    blockExplorerUrls: [  
      "https://etherscan.io",
    ],
    nativeCurrency: {
      name: "Ethereum Token",
      symbol: "ETH",
      decimals: 18,
    },
    chainId: `0x${Number(1).toString(16)}`,
  },
  test: {
    chainName: "Binance Smart Chain Testnet",
    rpcUrls: [
      "https://data-seed-prebsc-1-s1.binance.org:8545",
      "https://data-seed-prebsc-2-s1.binance.org:8545",
      "https://data-seed-prebsc-1-s2.binance.org:8545",
      "https://data-seed-prebsc-2-s2.binance.org:8545",
      "https://data-seed-prebsc-1-s3.binance.org:8545",
      "https://data-seed-prebsc-2-s3.binance.org:8545",
    ],
    blockExplorerUrls: ["https://testnet.binance.org/faucet-smart"],
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "tBNB",
      decimals: 18,
    },
    chainId: `0x${Number(97).toString(16)}`,
  },
  ethMain: {
    chainName: "Ethereum Mainnet",
    rpcUrls: ["https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com"],
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    chainId: `0x${Number(1).toString(16)}`,
    blockExplorerUrls: ["https://etherscan.io"],
  },
};
