import { identity } from 'rxjs';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bus } from './bus.entity';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  busId: number;

  @OneToMany(() => Bus, (bus) => bus.id)
  buses: Bus[];
}
