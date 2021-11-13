import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusEntity } from '@src/status/entity/status.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(StatusEntity)
    private statusRepository: Repository<StatusEntity>,
  ) {}

  async getStatus() {
    const [data, total] = await this.statusRepository.findAndCount()

    return {
      success: true,
      data: data,
      total: total
    }
  }
}