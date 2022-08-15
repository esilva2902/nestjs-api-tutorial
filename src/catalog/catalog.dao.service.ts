import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { PhoneTypes } from 'src/typeorm/entities/phone-types';

import { TypeORM } from 'src/typeorm/typeorm.service';
import { AgeUnits } from 'src/typeorm/entities/age-units';
import { Gender } from 'src/typeorm/entities/gender';

@Injectable()
export class CatalogDAO {
  private phoneTypesRepo: Repository<PhoneTypes>;
  private ageUnitsRepo: Repository<AgeUnits>;
  private genderRepo: Repository<Gender>;

  constructor(private typeorm: TypeORM) {
    this.phoneTypesRepo = this.typeorm.datasource.getRepository(PhoneTypes);
    this.ageUnitsRepo = this.typeorm.datasource.getRepository(AgeUnits);
    this.genderRepo = this.typeorm.datasource.getRepository(Gender);
  }

  getPhoneTypes(): Promise<PhoneTypes[]> {
    return this.phoneTypesRepo.find();
  }

  getAgeUnits(): Promise<AgeUnits[]> {
    return this.ageUnitsRepo.find();
  }

  getGender(): Promise<Gender[]> {
    return this.genderRepo.find();
  }
}
