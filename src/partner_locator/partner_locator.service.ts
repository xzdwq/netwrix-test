import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PartnerLocatorEntity } from '@src/partner_locator/entity/partner_locator.entity';

@Injectable()
export class PartnerLocatorService {
  constructor(
    @InjectRepository(PartnerLocatorEntity)
    private partnerLocatorRepository: Repository<PartnerLocatorEntity>,
  ) {}
  
  async getFind(query, type_id, country_id, country_short_name, state_id, state_short_name) {
    let data, total, qb
    qb = await this.partnerLocatorRepository
      .createQueryBuilder('partner_locator')
      .leftJoinAndSelect('partner_locator.status', 'status')
      .where('1 = 1')
    if(query) {
      qb = await qb.where('partner_locator.company like :query', { query:`%${query}%` })
            .orWhere('partner_locator.address like :query', { query:`%${query}%` })
    }
    if(type_id) {
      qb = await qb.andWhere('partner_locator.status_id = :type_id', { type_id: type_id })
    }
    if(country_short_name) {
      qb = await qb.andWhere('partner_locator.countries_coverd like :country_short_name', { country_short_name: `%${country_short_name}%` })
    }
    if(state_short_name) {
      qb = await qb.andWhere('partner_locator.states_coverd like :state_short_name', { state_short_name: `%${state_short_name}%` })
    }

    data = await qb.getMany()
    total = await qb.getCount()

    return {
      success: true,
      data: data,
      total: total
    }
  }
}