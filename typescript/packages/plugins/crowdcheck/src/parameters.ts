import { createToolParameters } from "@goat-sdk/core";
import { z } from "zod";

export class GetTokenVerdictParameters extends createToolParameters(
    z.object({
        chain: z.enum(["base", "ethereum", "robinhood", "solana"]).describe("The chain the token is on"),
        token: z.string().describe("The token contract address (EVM) or mint address (Solana)"),
    }),
) {}
