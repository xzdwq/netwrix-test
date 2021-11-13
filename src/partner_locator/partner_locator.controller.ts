import {
  Controller,
  Get,
  Query
} from '@nestjs/common';
import { PartnerLocatorService } from '@src/partner_locator/partner_locator.service';

@Controller()
export class PartnerLocatorController {
  constructor(
    private partnerLocatorService: PartnerLocatorService
  ) {}

  @Get('/find')
  async getAll(
    @Query('query') query: string,
    @Query('type_id') type_id: number,
    @Query('country_id') country_id: number,
    @Query('country_short_name') country_short_name: string,
    @Query('state_id') state_id: number,
    @Query('state_short_name') state_short_name: string,
  ): Promise<any> {
    return await this.partnerLocatorService.getFind(query, type_id, country_id, country_short_name, state_id, state_short_name)
  }
}