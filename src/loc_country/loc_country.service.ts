import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocCountryEntity } from '@src/loc_country/entity/loc_country.entity';

@Injectable()
export class LocCountryService {
  constructor(
    @InjectRepository(LocCountryEntity)
    private locCountryRepository: Repository<LocCountryEntity>,
  ) {}

  async getCountry(name) {
    let data, total
    if(!name) {
      [data, total] = await this.locCountryRepository.findAndCount()
    }

    return {
      success: true,
      data: data ? data : [],
      total: total ? total : 0
    }
  }
}