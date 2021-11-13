import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';

import { PartnerLocatorEntity } from '@src/partner_locator/entity/partner_locator.entity';

@Entity('status')
export class StatusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
    nullable: false
  })
  name: string;

  @OneToMany(() => PartnerLocatorEntity, (partner) => partner.status)
  partner: PartnerLocatorEntity[];
}