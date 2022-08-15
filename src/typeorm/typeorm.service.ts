import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { PhoneTypes } from './entities/phone-types';
import { AgeUnits } from './entities/age-units';
import { Gender } from './entities/gender';

@Injectable()
export class TypeORM {
  private _datasource: DataSource;

  constructor() {
    this._datasource = new DataSource({
      type: 'mysql',
      // host: 'localhost',
      host: '34.134.188.214',
      port: 3306,
      username: 'root',
      // password: 'h3qN7zxT2mN5wU3_kD8CwXn4PW@7827',
      password: 'R=){FK}-ZK"ng*PH',
      database: 'medivet',
      synchronize: false,
      logging: false,
      entities: [PhoneTypes, AgeUnits, Gender],
      migrations: [],
      subscribers: [],
    });

    this._datasource
      .initialize()
      .then(() =>
        console.log(
          `Data Source has been initialized: `,
          this._datasource.options,
        ),
      )
      .catch((error) => console.log(error));
  }

  get datasource(): DataSource {
    return this._datasource;
  }
}
