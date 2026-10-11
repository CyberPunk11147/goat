# @goat-sdk/plugin-crowdcheck

Check a token before your agent buys it. One tool, `crowdcheck_get_token_verdict`, returns ok, caution or avoid with a risk score 0-100, the top reasons and flags (the pool can be pulled, serial launcher, trading hook, bundled supply). New tokens on Base, Ethereum and Solana. Not financial advice.

Service: https://oracle.cyberwarex.com (Crowd Check). Cost: 0.03 USDC per verdict over x402. The verdict is not charged while it is still computing.

## Usage

```ts
import { crowdcheck } from "@goat-sdk/plugin-crowdcheck";

// try it without a wallet: 3 calls a day per IP
const tools = await getOnChainTools({ wallet, plugins: [crowdcheck({ freeTrial: true })] });

// pay per call: pass an x402 version 2 fetch (the service speaks x402 v2; the older x402-fetch package cannot read it)
import { x402Client, wrapFetchWithPayment } from "@x402/fetch";
import { ExactEvmScheme } from "@x402/evm/exact/client";
const client = new x402Client().register("eip155:*", new ExactEvmScheme(account)); // account from viem privateKeyToAccount
const paid = await getOnChainTools({ wallet, plugins: [crowdcheck({ fetch: wrapFetchWithPayment(fetch, client) })] });
```

Options: `fetch`, `freeTrial`, `source` (label sent as `?src=`, default `goat`), `baseUrl`, `maxWaitMs`.

## What it does not cover
Wash trading, wallets split to hide holdings, and off-chain actions. The first answer for a brand-new token can take up to a minute.
