import { Cron, CronController } from 'cron-decorators';
import { Service } from 'typedi';

@CronController('jobs')
@Service()
export class Job1 {
  @Cron('job3', '*/30 * * * * *', { runOnInit: true, timeZone: '' })
  public async exec(): Promise<void> {
    console.log('job3');
  }
}
