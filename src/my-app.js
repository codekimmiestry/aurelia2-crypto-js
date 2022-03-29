import { inject } from 'aurelia';
import { ApiService } from './services/api';
import config from './config.json';

@inject(ApiService)
export class MyApp {
    prices = [];

    constructor(apiService) {
        this.apiService = apiService;
    }

    async binding() {
        this.prices = await this.apiService.getPrices(config.coins);
        this.priceUpdate();
    }

    priceUpdate() {
        setInterval(async () => {
            this.prices = await this.apiService.getPrices(config.coins);
        }, 1000);
    }
}
