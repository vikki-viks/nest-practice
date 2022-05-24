import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bus } from './bus.entity';
import { Violation } from './violation.entity';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  busId: number;

  @OneToMany(() => Bus, (bus) => bus.id)
  buses: Bus[];

  @OneToMany(() => Violation, (violation) => violation.driver)
  violations: Violation[];
}
