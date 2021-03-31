import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { ThreeCommasDeal } from '../models/ThreeCommasDeal';
import { ThreeCommasDealRepository } from '../repositories/ThreeCommasDealRepository';
import { events } from '../subscribers/events';

@Service()
export class ThreeCommasDealService {
  constructor(
    @InjectRepository() private threeCommasDealRepository: ThreeCommasDealRepository,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public find(): Promise<ThreeCommasDeal[]> {
    this.log.info('Find all threeCommasDeals');
    return this.threeCommasDealRepository.find();
  }

  public findOne(id: number): Promise<ThreeCommasDeal | undefined> {
    this.log.info('Find all threeCommasDeals');
    return this.threeCommasDealRepository.findOne({ id });
  }

  public async create(threeCommasDeal: ThreeCommasDeal): Promise<ThreeCommasDeal> {
    // this.log.info('Create a new threeCommasDeal => ', threeCommasDeal.toString());
    const newThreeCommasDeal = await this.threeCommasDealRepository.save(threeCommasDeal);
    this.eventDispatcher.dispatch(events.threeCommasDeal.created, newThreeCommasDeal);
    return newThreeCommasDeal;
  }

  public update(id: number, threeCommasDeal: ThreeCommasDeal): Promise<ThreeCommasDeal> {
    this.log.info('Update a threeCommasDeal');
    threeCommasDeal.id = id;
    return this.threeCommasDealRepository.save(threeCommasDeal);
  }

  public async delete(id: number): Promise<void> {
    this.log.info('Delete a threeCommasDeal');
    await this.threeCommasDealRepository.delete(id);
    return;
  }
}
