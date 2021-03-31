import { Cron, CronController } from 'cron-decorators';
import { Service } from 'typedi';

@CronController('jobs')
@Service()
export class Job1 {
  @Cron('job2', '*/20 * * * * *', { runOnInit: true, timeZone: '' })
  public async exec(): Promise<void> {
    console.log('job2');
  }
}
