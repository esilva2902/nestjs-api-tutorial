import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'gender' })
export class Gender {
  @PrimaryGeneratedColumn()
  genderId: number;

  @Column()
  description: string;

  @Column()
  active: boolean;
}
