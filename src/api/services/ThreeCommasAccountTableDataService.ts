import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import * as uuid from 'uuid';

import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { ThreeCommasAccountTableData } from '../models/ThreeCommasAccountTableData';
import { ThreeCommasAccountTableDataRepository } from '../repositories/ThreeCommasAccountTableDataRepository';
import { events } from '../subscribers/events';

@Service()
export class ThreeCommasAccountTableDataService {
  constructor(
    @InjectRepository() private threeCommasAccountTableDataRepository: ThreeCommasAccountTableDataRepository,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public find(): Promise<ThreeCommasAccountTableData[]> {
    this.log.info('Find all threeCommasAccountTableDatas');
    return this.threeCommasAccountTableDataRepository.find();
  }

  public findOne(id: string): Promise<ThreeCommasAccountTableData | undefined> {
    this.log.info('Find all threeCommasAccountTableDatas');
    return this.threeCommasAccountTableDataRepository.findOne({ id });
  }

  public async create(threeCommasAccountTableData: ThreeCommasAccountTableData): Promise<ThreeCommasAccountTableData> {
    // this.log.info('Create a new threeCommasAccountTableData => ', threeCommasAccountTableData.toString());
    threeCommasAccountTableData.id = uuid.v1();
    const newThreeCommasAccountTableData = await this.threeCommasAccountTableDataRepository.save(threeCommasAccountTableData);
    this.eventDispatcher.dispatch(events.threeCommasAccountTableData.created, newThreeCommasAccountTableData);
    return newThreeCommasAccountTableData;
  }

  public update(id: string, threeCommasAccountTableData: ThreeCommasAccountTableData): Promise<ThreeCommasAccountTableData> {
    this.log.info('Update a threeCommasAccountTableData');
    threeCommasAccountTableData.id = id;
    return this.threeCommasAccountTableDataRepository.save(threeCommasAccountTableData);
  }

  public async delete(id: string): Promise<void> {
    this.log.info('Delete a threeCommasAccountTableData');
    await this.threeCommasAccountTableDataRepository.delete(id);
    return;
  }
}
