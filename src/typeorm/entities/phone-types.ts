import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'phoneTypes' })
export class PhoneTypes {
  @PrimaryGeneratedColumn()
  phoneTypeId: number;

  @Column()
  description: string;

  @Column()
  active: boolean;
}
