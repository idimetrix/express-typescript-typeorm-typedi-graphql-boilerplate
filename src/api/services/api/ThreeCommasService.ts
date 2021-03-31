import { Inject, Service } from 'typedi';
import * as fs from 'fs';

import { Logger, LoggerInterface } from '../../../decorators/Logger';
import { ThreeCommasApi } from '../../api/ThreeCommasApi';
import { ThreeCommasDeal } from '../../models/ThreeCommasDeal';
import { ThreeCommasDealService } from '../ThreeCommasDealService';
import { env } from '../../../env';

@Service()
export class ThreeCommasService {
  @Inject()
  private threeCommasDealService: ThreeCommasDealService;

  private processing: boolean = false;

  private api: ThreeCommasApi;

  constructor(@Logger(__filename) private log: LoggerInterface) {
    this.api = new ThreeCommasApi({
      key: env.api.threeCommas.key,
      secret: env.api.threeCommas.secret,
      url: env.api.threeCommas.url,
    });
  }

  public async exec(): Promise<void> {
    this.log.info('exec');

    if (this.processing) {
      return;
    }

    this.processing = true;

    await this.method1({ limit: 1000 });

    // this.processing = false;
  }

  // private signature(text: string): string {
  //   return crypto.createHmac('sha256', this.secret).update(text).digest('hex');
  // }

  private file(data: any): void {
    fs.writeFileSync('./json.json', JSON.stringify(data));
  }

  private async method1(params: any = {}): Promise<any> {
    try {
      let offset: number = 0;
      while (1) {
        try {
          const limit: number = params.limit || 1000;

          this.log.debug(`BEFORE REQUEST`);

          const response: ThreeCommasDeal[] = await this.api.getDeals({ ...params, limit, offset });

          this.log.debug(`AFTER REQUEST`);

          if (!response || !response?.length) {
            this.log.debug(JSON.stringify(response));

            break;
          }

          this.log.debug(`OFFSET: ${offset} LIMIT: ${limit}`);

          this.file({ limit, offset });

          this.log.debug(`BEFORE STORE`);

          try {
            await Promise.all(response.map((model: ThreeCommasDeal): any => this.threeCommasDealService.create(model)));
          } catch (error) {
            this.log.error(error);

            continue;
          }

          this.log.debug(`AFTER STORE`);

          offset += limit;
        } catch (error) {
          this.log.error(error);

          // break;
        }
      }
    } catch (error) {
      this.log.error(error);
    }
  }
}
