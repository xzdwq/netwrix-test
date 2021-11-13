import {
  Controller,
  Get,
  Query
} from '@nestjs/common';
import { LocStateService } from '@src/loc_state/loc_state.service';

@Controller()
export class LocStateController {
  constructor(
    private locStateService: LocStateService
  ) {}

  @Get('/states')
  async getAll(
    @Query('country') country: string
  ): Promise<any> {
    return await this.locStateService.getStates(country)
  }
}