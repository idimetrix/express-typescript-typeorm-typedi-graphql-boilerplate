import * as querystring from 'querystring';
import * as crypto from 'crypto';
import fetch from 'node-fetch';

interface Options {
  key: string;
  secret: string;
  url?: string;
}

export class ThreeCommasApi {
  constructor(private readonly options: Options) {}

  public signature(path: string, data: string): string {
    const request: string = path + data;

    return crypto.createHmac('sha256', this.options.secret).update(request).digest('hex');
  }

  public async makeRequest(method: string, path: string, params: Record<string, any> = {}): Promise<any> {
    if (!this.options.key || !this.options.secret) {
      return new Error('missing api key or secret');
    }

    try {
      const response = await fetch(`${this.options.url}${path}${querystring.stringify(params)}`, {
        method,
        timeout: 30000,
        agent: '',
        headers: {
          APIKEY: this.options.key,
          Signature: this.signature(path, querystring.stringify(params)),
        },
      });

      return await response.json();
    } catch (error) {
      console.error(error);

      return false;
    }
  }

  /**
   * Deals methods
   */

  public async getDeals(params: any): Promise<any> {
    return await this.makeRequest('GET', '/public/api/ver1/deals?', params);
  }

  public async dealUpdateMaxSafetyOrders(deal_id: string, max_safety_orders): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/deals/${deal_id}/update_max_safety_orders?`, { deal_id, max_safety_orders });
  }

  public async dealPanicSell(deal_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/deals/${deal_id}/panic_sell?`, { deal_id });
  }

  public async dealCancel(deal_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/deals/${deal_id}/cancel?`, { deal_id });
  }

  public async dealUpdateTp(deal_id: string, new_take_profit_percentage): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/deals/${deal_id}/update_tp?`, { deal_id, new_take_profit_percentage });
  }

  public async getDeal(deal_id: string): Promise<any> {
    return await this.makeRequest('GET', `/public/api/ver1/deals/${deal_id}/show?`, { deal_id });
  }

  public async getDealSafetyOrders(deal_id: string): Promise<any> {
    return await this.makeRequest('GET', `/public/api/ver1/deals/${deal_id}/market_orders?`, { deal_id });
  }

  public async dealAddFunds(params: any): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/deals/${params.deal_id}/add_funds?`, params);
  }

  /**
   * Bots methods
   */

  public async getBotsBlackList(): Promise<any> {
    return await this.makeRequest('GET', `/public/api/ver1/bots/pairs_black_list?`);
  }

  public async botsUpdateBlackList(params: any): Promise<any> {
    return await this.makeRequest('POST', '/public/api/ver1/bots/update_pairs_black_list?', params);
  }

  public async botCreate(params: any): Promise<any> {
    return await this.makeRequest('POST', '/public/api/ver1/bots/create_bot?', params);
  }

  public async getBots(params: any): Promise<any> {
    return await this.makeRequest('GET', `/public/api/ver1/bots?`, params);
  }

  public async getBotsStats(params: any): Promise<any> {
    return await this.makeRequest('GET', `/public/api/ver1/bots/stats?`, params);
  }

  public async botUpdate(params: any): Promise<any> {
    return await this.makeRequest('PATCH', `/public/api/ver1/bots/${params.bot_id}/update?`, params);
  }

  public async botDisable(bot_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/bots/${bot_id}/disable?`, { bot_id });
  }

  public async botEnable(bot_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/bots/${bot_id}/enable?`, { bot_id });
  }

  public async botStartNewDeal(params: any): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/bots/${params.bot_id}/start_new_deal?`, params);
  }

  public async botDelete(bot_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/bots/${bot_id}/delete?`, { bot_id });
  }

  public async botPaniceSellAllDeals(bot_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/bots/${bot_id}/panic_sell_all_deals?`, { bot_id });
  }

  public async botCancelAllDeals(bot_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/bots/${bot_id}/cancel_all_deals?`, { bot_id });
  }

  public async botShow(bot_id: string): Promise<any> {
    return await this.makeRequest('GET', `/public/api/ver1/bots/${bot_id}/show?`, { bot_id });
  }

  /**
   * Smart Trades methods
   */

  public async smartTradesCreateSimpleSell(params: any): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/smart_trades/create_simple_sell?`, params);
  }

  public async smartTradesCreateSimpleBuy(params: any): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/smart_trades/create_simple_buy?`, params);
  }

  public async smartTradesCreateSmartSell(params: any): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/smart_trades/create_smart_sell?`, params);
  }

  public async smartTradesCreateSmartCover(params: any): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/smart_trades/create_smart_cover?`, params);
  }

  public async smartTradesCreateSmartTrade(params: any): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/smart_trades/create_smart_trade?`, params);
  }

  public async smartTrades(params: any): Promise<any> {
    return await this.makeRequest('GET', `/public/api/ver1/smart_trades?`, params);
  }

  public async smartTradesV2(params: any): Promise<any> {
    return await this.makeRequest('GET', `/public/api/v2/smart_trades?`, params);
  }

  public async smartTradesStepPanicSell(params: any): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/smart_trades/${params.smart_trade_id}/step_panic_sell?`, params);
  }

  public async smartTradesUpdate(params: any): Promise<any> {
    return await this.makeRequest('PATCH', `/public/api/ver1/smart_trades/${params.smart_trade_id}/update?`, params);
  }

  public async smartTradesCancel(smart_trade_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/smart_trades/${smart_trade_id}/cancel?`, { smart_trade_id });
  }

  public async smartTradesPanicSell(smart_trade_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/smart_trades/${smart_trade_id}/panic_sell?`, { smart_trade_id });
  }

  public async smartTradesForceProcess(smart_trade_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/smart_trades/${smart_trade_id}/force_process?`, { smart_trade_id });
  }

  /**
   * Accounts methods
   */

  public async accountsNew(params: any): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/accounts/new?`, params);
  }

  public async accounts(): Promise<any> {
    return await this.makeRequest('GET', `/public/api/ver1/accounts?`);
  }

  public async accountsMarketList(): Promise<any> {
    return await this.makeRequest('GET', `/public/api/ver1/accounts/market_list?`);
  }

  public async accountsCurrencyRates(): Promise<any> {
    return await this.makeRequest('GET', `/public/api/ver1/accounts/currency_rates?`);
  }

  public async accountSellAllToUsd(account_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/accounts/${account_id}/sell_all_to_usd?`, { account_id });
  }

  public async accountSellAllToBtc(account_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/accounts/${account_id}/sell_all_to_btc?`, { account_id });
  }

  public async accountLoadBalances(account_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/accounts/${account_id}/load_balances?`, { account_id });
  }

  public async accountRename(params: any): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/accounts/${params.account_id}/rename?`, params);
  }

  public async accountPieChartData(account_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/accounts/${account_id}/pie_chart_data?`, { account_id });
  }

  public async accountTableData(account_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/accounts/${account_id}/account_table_data?`, { account_id });
  }

  public async accountRemove(account_id: string): Promise<any> {
    return await this.makeRequest('POST', `/public/api/ver1/accounts/${account_id}/remove?`, { account_id });
  }
}
