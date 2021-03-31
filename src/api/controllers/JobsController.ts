import { Cron, CronController } from 'cron-decorators';
import { Inject, Service } from 'typedi';

import { ThreeCommasService } from '../services/api/ThreeCommasService';

@CronController('jobs')
@Service()
export class JobsController {
  @Inject()
  private threeCommasService: ThreeCommasService;

  @Cron('threeCommasJob', '*/10 * * * * *', { runOnInit: true, timeZone: '' })
  public async threeCommasJob(): Promise<void> {
    await this?.threeCommasService?.exec();
  }
}
