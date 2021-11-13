import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PartnerLocatorEntity } from '@src/partner_locator/entity/partner_locator.entity';
import { PartnerLocatorService } from '@src/partner_locator/partner_locator.service';
import { PartnerLocatorController } from '@src/partner_locator/partner_locator.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PartnerLocatorEntity
    ])
  ],
  providers: [
    PartnerLocatorService
  ],
  controllers: [
    PartnerLocatorController
  ],
})
export class PartnerLocatorModule {}