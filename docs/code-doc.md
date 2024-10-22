# Code Documentation

## Frontend

### Providers

- `BalanceProvider.ts`: Fetch the balance of the user
- `MetaProvider.ts`: Handle connection with the smart wallet
- `WcEventProvider.ts`: Handle events from WalletConnect

### Constants

- `chains.ts`: List of supported chains
- `tokens.ts`: List of supported tokens and ERC20 ABI
- `entrypoint.ts`: Address of the entrypoint contract and its ABI
- `contracts.ts`: Address of aave contracts

## Smart Contracts

- `Factory.sol`: Contract that deploy the smart wallets
- `Account.sol`: Contract that are deployed by the factory
- `P256.sol`: Contract that handle the P256 signature
- `Paymaster.sol`: Contract that handle the paymaster logic
- `WebAuthn.sol`: Contract that handle the webAuthn authentication
