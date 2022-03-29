// JavaScript source code
import { inject } from 'aurelia';
import { IHttpClient } from '@aurelia/fetch-client';

@inject(IHttpClient)
export class ApiService {
    constructor(http) {
        this.http = http;
    }

    async getPrices(ids) {
        try {
            let request =
                await this.http.fetch(
                    `https://api.coingecko.com/api/v3/simple/price?ids=${ids.toString()}&vs_currencies=usd`);
            return request.json();
        } catch (e) {
            return e;
        }
    }
}