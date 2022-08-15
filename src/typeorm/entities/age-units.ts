import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ageUnits' })
export class AgeUnits {
  @PrimaryGeneratedColumn()
  ageUnitId: number;

  @Column()
  description: string;

  @Column()
  active: boolean;
}
