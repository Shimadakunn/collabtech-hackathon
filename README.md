<div align="center">
<img src="https://omnigas.vercel.app/favicon.ico" width="100"/>
<h1 align="center" style="margin-bottom: 0">Multisig ERC-4337 Smart Wallet controlled with Passkeys</h1>
<p align="center">An All-in-one App that let you abstract all the difficulties of the blockchain</a></p>
</div>

https://github.com/user-attachments/assets/95631734-f2fd-4114-80ee-7390c5b91814
# 🔊 SOUND ON FOR THE DEMO VIDEO 🔊
---
# Smart Contracts
## Supported Chains
- Arbitrum Sepolia

## Factory
```
0xaCea7eD933a39B18E30C9F899a97787669f55752
```

## P256 Verifier
```
0x3AB1BDed845DE299EcC4A8E5aB6AF2AB10860F04
```

## Paymaster
```
0xe2A1e611c180fd59d930808Bbb1B76BBc9fC0583
```

# Project Summary

Onboarding new users into blockchain applications is a challenge. Current solutions revolves around mnemonics that need to be stored to recover accounts on users wallets, effectively introducing security risks. By using passkeys to control accounts, we abstract away the need for users to store mnemonics and we allow users to use a familiar interface to control their accounts (biometric authentication) in one click UX.

Our wallet is meant to be an implementation of the [ERC-4337 standard](https://github.com/eth-infinitism/account-abstraction), that allow users to have an account in the form of a smart contract. In this case, we use passkeys to let users control their account thanks to the onchain P256 signature verification developed by [Daimo](https://github.com/daimo-eth/p256-verifier).

</br>

# Key Features and Technologies

1 - ERC-4337 Implementation:
    Adopts the ERC-4337 standard for account abstraction, enhancing wallet flexibility and user experience.

2 - Biometric Authentication:
    Utilizes WebAuthn for biometric signatures, replacing the traditional 12-word seed phrase. Enhances security while simplifying the user authentication process.

3 - Flexible Gas Fee Payment Options:
    Supports multiple payment methods for transaction fees: Native blockchain tokens, ERC-20 tokens on the same blockchain, ERC-20 tokens from different blockchains (cross-chain functionality), Sponsored transactions (gasless for the end-user)

4 - WalletConnect Integration:
    Enables seamless connection to decentralized applications (dApps) using the WalletConnect protocol.

5 - Multisig:
    Have a collaborative wallet where you can 

7 - User-Centric Design:
Focuses on maintaining a simple, intuitive interface while providing access to advanced blockchain features.


## Project Goals:
 - Simplify the onboarding process for new users entering the blockchain space.
 - Enhance security through biometric authentication and multisig, reducing the risk of lost or stolen private keys.
 - Provide a versatile solution for gas fee payments, accommodating various user preferences and token holdings.
 - Create a seamless experience for interacting with dApps and DeFi protocols.

---

# How does it work?

## Passkey Generation

When you create an account, a passkey is generated and stored in your device or your password manager. This passkey is tied to an id. This is worth noting that the passkey is never managed by the wallet itself, the wallet only uses the browser API to interact with it. Basically, the wallet asks for signatures and your device/password manager handles the rest. This is a very important security feature, as it means that the wallet never has access to your passkey, and cannot be compromised to steal it.

## User creation

Once the passkey is generated, the passkeys browser API returns a public key and an id. These public information are stored onchain and used to identify your account.

## Smart Account creation

The Smart Account is the contract implementing the ERC-4337 standard. Its address is deterministically computed from the public key of the user. This contract implements all the logic to verify signatures, effectively allowing the user to operate onchain actions thanks to their passkey. The contract is not deployed when the passkey is generated to avoid paying huge gas fees for a contract that might never be used. Instead, it is deployed when the user first interacts with the contract.

</br>

![image](https://i.imgur.com/4PxmDaH.png)


## Onchain interactions via UserOperations

The ERC-4337 standard revolves around UserOperations, which are basically objects replacing transactions and that are sent on behalf of the user by nodes known as [`Bundlers`](https://docs.alchemy.com/docs/bundler-services). UserOperations are signed by the user with their passkey and the bundler's job is to include them in a block while taking a little fee for the work. In our case, we use the [Alchemy Bundler node implementation](https://docs.alchemy.com/reference/bundler-api-endpoints). We strongly advise you to look at Alchemy documentation and the ERC-4337 EIP to understand how Bundlers work.

## Retrieving an account

Retrieving an account, is simply done by using the browser API. The wallet will ask for a signature of a random message but the signature is not used. Instead, the browser API returns the id of the passkey. The wallet then uses these information to retrieve the account information onchain (the deterministic address of the Smart Account and the balance being the two main interesting information for the UI).

## How to use it? (on Sepolia testnet)

The wallet can be found at: https://passkeys-4337.vercel.app/
On your first visit, create an account by entering a username. You will be asked to authenticate with your device (biometric authentication for example). Once done, you will be redirected to your account page. You can then see your address, balance, send transactions to other accounts, or connect to other applications via Wallet Connect.

---

# Installation on your local environment

## Requirements

- [pnpm](https://pnpm.io/installation)
- [Alchemy API KEY](https://docs.alchemy.com/reference/bundler-api-endpoints): to be able to include UserOperations in blocks, see [.env.local.example](./front/.env.local.example)
- a **TESTING** account with some Sepolia funds, to be able to sponsor user creation (see [.env.local.example](./front/.env.local.example)). Be careful to not use any private key tied to some real funds. **DO NOT LEAK YOUR PRIVATE KEYS**.
- [Foundry](https://book.getfoundry.sh/getting-started/installation): if you want to deploy your own contracts.

## Installation

The front is built with NextJS, and the contracts are built with Foundry. To install the dependencies, run:

```bash
cd front
pnpm install
```

Before running the front, you need to update the `.env.local` file with your own values. You can find an example in [.env.local.example](./front/.env.local.example).

```bash
cp .env.local.example .env.local
# Then update the values of the Alchemy API KEY and the TESTING private key
```

## Run

```bash
pnpm dev
```

## Deploy your own Smart Account Factory (optional)

```bash
forge script DeploySimpleAccountFactory --rpc-url $RPC_URL --private-key $PRIVATE_KEY  --etherscan-api-key $ETHERSCAN_API_KEY --verify --slow --broadcast
```

