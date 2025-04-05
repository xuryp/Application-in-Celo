# Celo Composer - MiniPay Template | Hardhat

## How to use

1. Create a  `.env` and set the essential environmental variables.

   1. For the **smart contract deployment** you will need the `PRIVATE_KEY` set in `.env`.
   2. For the **smart contract verification** you will need a [Celoscan API Key](https://celoscan.io/myapikey) `CELOSCAN_API_KEY` set in `.env`.

2. Compile the contract 

```bash
npx hardhat compile
```

3. Deploy the contract

Make sure your wallet is funded when deploying to testnet or mainnet. You can get test tokens for deploying it on Alfajores from the [Celo Faucet](https://faucet.celo.org/alfajores).

On Alfajores

```bash
npx hardhat run scripts/deploy.ts --network alfajores
```

On Celo Mainnet

```bash
npx hardhat run scripts/deploy.ts --network celo
```

4. Verify the contract

For Alfajores (Testnet) Verification

```bash
npx hardhat verify <CONTRACT_ADDRESS> --network alfajores
```

For the withdrawCeloToken.sol contract that could look like this:

```bash
npx hardhat verify 0x838Ec2f4b16260DA73fE02B988E586c7Ca69eBdE --network alfajores
```

For Celo Mainnet Verification

```bash
npx hardhat verify <CONTRACT_ADDRESS> --network celo
```

For the withdrawCeloToken.sol contract that could look like this:

```bash
npx hardhat verify 0x838Ec2f4b16260DA73fE02B988E586c7Ca69eBdE --network celo
```

Check the file `hardhat.config.js` for Celo specific hardhat configuration.

5. Test the transaction 

Use simulate.ts to test whether the transaction of contract is successful.

On Alfajores

```bash
npx hardhat run scripts/simulate.ts --network alfajores
```

On Celo Mainnet

```bash
npx hardhat run scripts/simulate.ts --network celo
```