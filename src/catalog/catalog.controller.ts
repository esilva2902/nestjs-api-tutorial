import { Controller, Get } from '@nestjs/common';

import { AgeUnits } from 'src/typeorm/entities/age-units';
import { Gender } from 'src/typeorm/entities/gender';
import { PhoneTypes } from 'src/typeorm/entities/phone-types';

import { CatalogDAO } from './catalog.dao.service';

@Controller('catalogs')
export class CatalogController {
  constructor(private catalogDAO: CatalogDAO) {}

  @Get('phone-types')
  async getPhoneTypes(): Promise<PhoneTypes[]> {
    const phoneTypes: PhoneTypes[] = await this.catalogDAO.getPhoneTypes();
    return phoneTypes;
  }

  @Get('age-units')
  async getAgeUnits(): Promise<AgeUnits[]> {
    const ageUnits: AgeUnits[] = await this.catalogDAO.getAgeUnits();
    return ageUnits;
  }

  @Get('gender')
  async getGender(): Promise<Gender[]> {
    const gender: Gender[] = await this.catalogDAO.getGender();
    return gender;
  }
}
