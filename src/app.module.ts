import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { TypeORMModule } from './typeorm/typeorm.module';
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [AuthModule, TypeORMModule, CatalogModule],
})
export class AppModule {}
