import { EntityRepository, Repository } from 'typeorm';

import { ThreeCommasAccountTableData } from '../models/ThreeCommasAccountTableData';

@EntityRepository(ThreeCommasAccountTableData)
export class ThreeCommasAccountTableDataRepository extends Repository<ThreeCommasAccountTableData> {}
