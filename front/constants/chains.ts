import { Hex } from "viem";
import { arbitrumSepolia, Chain, optimismSepolia } from "viem/chains";

export type ChainType = {
  viem: Chain;
  bundlerRpc: any;
  eId: number;
  paymaster: Hex;
};

export const chains: {
  [key: string]: ChainType;
} = {
  arbitrumSepolia: {
    viem: arbitrumSepolia,
    bundlerRpc: `https://arb-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_BUNDLER_API_KEY}`,
    // bundlerRpc: "http://localhost:4337",
    eId: 40231,
    paymaster: "0xe2A1e611c180fd59d930808Bbb1B76BBc9fC0583",
  },
  optimismSepolia: {
    viem: optimismSepolia,
    bundlerRpc: `https://opt-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_BUNDLER_API_KEY}`,
    eId: 40232,
    paymaster: "0x79ef52595911F4914135ea8e76977446653d7bED",
  },
};

export const CHAINS = {
  ...arbitrumSepolia,
  ...optimismSepolia,
};
