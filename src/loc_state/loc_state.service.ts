import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocStateEntity } from '@src/loc_state/entity/loc_state.entity';

@Injectable()
export class LocStateService {
  constructor(
    @InjectRepository(LocStateEntity)
    private locStateRepository: Repository<LocStateEntity>,
  ) {}

  async getStates(country_id) {
    const [data, total] = await this.locStateRepository.findAndCount({
      where: {
        country_id: country_id
      }
    })

    return {
      success: true,
      data: data,
      total: total
    }
  }
}