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
    eId: 40231,
    paymaster: "0xe2A1e611c180fd59d930808Bbb1B76BBc9fC0583",
  },
};

export const CHAINS = {
  ...arbitrumSepolia,
  ...optimismSepolia,
};
