import {
  Controller,
  Get,
  Query
} from '@nestjs/common';
import { LocCountryService } from '@src/loc_country/loc_country.service';

@Controller()
export class LocCountryController {
  constructor(
    private locCountryService: LocCountryService
  ) {}

  @Get('/country')
  async getAll(
    @Query('name') name: string
  ): Promise<any> {
    return await this.locCountryService.getCountry(name)
  }
}