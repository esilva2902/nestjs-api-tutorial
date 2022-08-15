import { Module } from '@nestjs/common';

import { CatalogDAO } from './catalog.dao.service';
import { CatalogController } from './catalog.controller';

@Module({
  providers: [CatalogDAO],
  controllers: [CatalogController],
})
export class CatalogModule {}
