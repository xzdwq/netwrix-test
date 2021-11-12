import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';

import { LocStateEntity } from '@src/loc_state/entity/loc_state.entity';

@Entity('loc_country')
export class LocCountryEntity {
  @PrimaryGeneratedColumn()
  country_id: number;

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

  @OneToMany(() => LocStateEntity, (state) => state.country)
  state: LocStateEntity[];
}