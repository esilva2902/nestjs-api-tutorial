import { Global, Module } from '@nestjs/common';
import { TypeORM } from './typeorm.service';

@Global()
@Module({
  providers: [TypeORM],
  exports: [TypeORM],
})
export class TypeORMModule {}
