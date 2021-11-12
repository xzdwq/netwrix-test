import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LocCountryEntity } from '@src/loc_country/entity/loc_country.entity';
import { LocCountryService } from '@src/loc_country/loc_country.service';
import { LocCountryController } from '@src/loc_country/loc_country.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LocCountryEntity
    ])
  ],
  providers: [
    LocCountryService
  ],
  controllers: [
    LocCountryController
  ],
})
export class LocCountryModule {}