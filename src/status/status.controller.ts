import {
  Controller,
  Get
} from '@nestjs/common';
import { StatusService } from '@src/status/status.service';

@Controller()
export class StatusController {
  constructor(
    private statusService: StatusService
  ) {}

  @Get('/status')
  async getStatus(): Promise<any> {
    return await this.statusService.getStatus()
  }
}