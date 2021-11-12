import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LocStateEntity } from '@src/loc_state/entity/loc_state.entity';
import { LocStateService } from '@src/loc_state/loc_state.service';
import { LocStateController } from '@src/loc_state/loc_state.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LocStateEntity
    ])
  ],
  providers: [
    LocStateService
  ],
  controllers: [
    LocStateController
  ],
})
export class LocStateModule {}