import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StatusEntity } from '@src/status/entity/status.entity';
import { StatusController } from '@src/status/status.controller';
import { StatusService } from '@src/status/status.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StatusEntity
    ])
  ],
  providers: [
    StatusService
  ],
  controllers: [
    StatusController
  ],
})
export class StatusModule {}