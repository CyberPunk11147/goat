import { type Chain, PluginBase } from "@goat-sdk/core";
import { CrowdCheckApi, type CrowdCheckOptions } from "./api";
import { CrowdCheckService } from "./crowdcheck.service";

export class CrowdCheckPlugin extends PluginBase {
    constructor(options: CrowdCheckOptions = {}) {
        super("crowdcheck", [new CrowdCheckService(new CrowdCheckApi(options))]);
    }

    supportsChain(chain: Chain): boolean {
        return true;
    }
}

/**
 * Factory function to create a new Crowd Check plugin instance.
 * Pass an x402-aware fetch to pay 0.03 USDC per verdict, or { freeTrial: true } to try it without a wallet.
 */
export function crowdcheck(options: CrowdCheckOptions = {}) {
    return new CrowdCheckPlugin(options);
}
