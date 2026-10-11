import { Tool } from "@goat-sdk/core";
import { CrowdCheckApi } from "./api";
import { GetTokenVerdictParameters } from "./parameters";

export class CrowdCheckService {
    constructor(private readonly api: CrowdCheckApi) {}

    @Tool({
        name: "crowdcheck_get_token_verdict",
        description:
            "Check a token before buying it. Returns ok, caution or avoid with a risk score 0-100, the top reasons and flags (pool can be pulled, serial launcher, trading hook, bundled supply). Works for new Base, Ethereum and Solana tokens. Not financial advice.",
    })
    async getTokenVerdict(params: GetTokenVerdictParameters) {
        return this.api.getVerdict(params.chain, params.token);
    }
}
