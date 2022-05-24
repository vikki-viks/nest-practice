import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Driver } from './driver.entity';

@Entity()
export class Violation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  driverId: Date;

  @ManyToOne(() => Driver, (driver) => driver.violations)
  driver: Driver;
}
