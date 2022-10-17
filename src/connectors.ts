import { Chain, connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { chain, configureChains, createClient } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const BscMainnet: Chain = {
  id: 56,
  name: "Smart Chain",
  network: "bsc",
  iconUrl: "/bnb.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB",
  },
  rpcUrls: {
    default: "https://bsc-dataseed.binance.org/",
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://bscscan.com" },
    etherscan: { name: "BscScan", url: "https://bscscan.io" },
  },
  testnet: false,
};

const BscTestnet: Chain = {
  id: 97,
  name: "Smart Chain Testnet",
  network: "bsc",
  iconUrl: "/bnb.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "tBNB",
    symbol: "tBNB",
  },
  rpcUrls: {
    default: "https://data-seed-prebsc-1-s1.binance.org:8545",
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://testnet.bscscan.com" },
    etherscan: { name: "BscScan", url: "https://testnet.bscscan.com" },
  },
  testnet: true,
};

export const { chains, provider, webSocketProvider} = configureChains(
  [BscTestnet],
  [
    jsonRpcProvider({ rpc: () => ({ http: BscTestnet.rpcUrls.default }) }),
    publicProvider()
  ]
);

export const connectors = connectorsForWallets([
  {
    groupName: "Basic",
    wallets: [metaMaskWallet({ chains }), walletConnectWallet({ chains })],
  },
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
});
