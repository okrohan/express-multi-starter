import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
@Entity({name: 'Test'})
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age!: number;
}
