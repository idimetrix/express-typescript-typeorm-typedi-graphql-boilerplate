import { EntityRepository, Repository } from 'typeorm';

import { ThreeCommasDeal } from '../models/ThreeCommasDeal';

@EntityRepository(ThreeCommasDeal)
export class ThreeCommasDealRepository extends Repository<ThreeCommasDeal> {}
