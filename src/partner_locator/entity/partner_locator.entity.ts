import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import { StatusEntity } from '@src/status/entity/status.entity';

@Entity('partner_locator')
export class PartnerLocatorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
    nullable: false
  })
  company: string;

  @Column({
    default: null,
    nullable: true
  })
  status_id: number;
  @ManyToOne(() => StatusEntity, (status) => status.partner)
  @JoinColumn({ name: 'status_id' })
  status: StatusEntity;

  @Column({
    length: 255,
    nullable: true
  })
  logo: string;

  @Column({
    length: 255,
    nullable: true
  })
  address: string;

  @Column({
    length: 255,
    nullable: true
  })
  website: string;

  @Column({
    length: 50,
    nullable: true
  })
  phone: string;

  @Column({
    length: 255,
    nullable: true
  })
  countries_coverd: string;

  @Column({
    length: 255,
    nullable: true
  })
  states_coverd: string;
}