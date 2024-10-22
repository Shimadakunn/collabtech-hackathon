# Setting Up the Project

## Prerequisites

- Node.js (latest)
- Pnpm (latest)

## File Structure

- `front/`: Frontend code
- `contracts/`: Smart contracts code
- `docs/`: Documentation

---

# Frontend

## Install dependencies

```bash
cd front
pnpm install
```

## Setup environment variables for frontend

```bash
cp .env.local.example .env.local
```

- NEXT_PUBLIC_RELAYER_PRIVATE_KEY: Private key of the relayer account
- NEXT_PUBLIC_BUNDLER_API_KEY: API key of the alchemy bundler
- NEXT_PUBLIC_PRICE_API_KEY: API key of the price API from [Cryptocompare](https://www.cryptocompare.com/api)
- NEXT_PUBLIC_FACTORY_CONTRACT_ADDRESS: Address of the factory contract (factory that I deployed can be found in the README.md)

---

# Smart Contracts

## Install dependencies

```bash
git submodule update --init --recursive
```

## Setup environment variables for smart contracts

```bash
cd contracts
cp .env.example .env
```

- PRIVATE_KEY: Private key of the account that will deploy the contracts
- ENTRYPOINT: Address of the entrypoint contract (entrypoint that I deployed can be found in the README.md)
- SEPOLIA_RPC_URL: RPC URL of the sepolia network
- ARBITRUM_SEPOLIA_RPC_URL: RPC URL of the arbitrum sepolia network
- OPTIMISM_SEPOLIA_RPC_URL: RPC URL of the optimism sepolia network
- ETHERSCAN_API_KEY: API key of the etherscan
- ARBITRUMSCAN_API_KEY: API key of the arbitrumscan
- OPTIMISMSCAN_API_KEY: API key of the optimismsscan

## Deploy the contracts

```bash
bash deploy.sh
bash verify.sh
```

You can look into `./script` folder for multiple chains deployment.
