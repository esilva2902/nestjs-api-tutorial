import { Injectable } from '@nestjs/common';

import { PhoneTypes } from 'src/typeorm/entities/phone-types';
import { TypeORM } from 'src/typeorm/typeorm.service';

@Injectable({})
export class AuthService {
  constructor(private typeorm: TypeORM) {}

  signup(): any {
    return this.typeorm.datasource.getRepository(PhoneTypes).find();
  }

  signin(): any {
    return { msg: 'signup - Hello again' };
  }
}
