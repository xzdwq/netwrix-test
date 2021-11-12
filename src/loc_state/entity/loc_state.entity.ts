import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import { LocCountryEntity } from '@src/loc_country/entity/loc_country.entity';

@Entity('loc_state')
export class LocStateEntity {
  @PrimaryGeneratedColumn()
  state_id: number;

  @Column({
    length: 255,
    nullable: false
  })
  name: string;

  @Column({
    length: 50,
    nullable: false
  })
  short_name: string;

  @Column({
    default: null,
    nullable: true
  })
  country_id: number;
  @ManyToOne(() => LocCountryEntity, (country) => country.state)
  @JoinColumn({ name: 'country_id' })
  country: LocCountryEntity;
}