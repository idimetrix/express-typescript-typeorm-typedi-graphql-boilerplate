import { Cron, CronController } from 'cron-decorators';
import { Service } from 'typedi';

@CronController('jobs')
@Service()
export class Jobs1 {
  @Cron('job1', '*/10 * * * * *', { runOnInit: true, timeZone: '' })
  public async exec(): Promise<void> {
    console.log('job1');
  }
}
