import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  //ID unico
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  fullName: string;
  @Column('text', { unique: true })
  email: string;
  //select:false es para que no traiga la password cuando pida el user
  @Column('text', { select: false })
  password: string;
  @Column('bool', { default: true })
  isActive: boolean;
  //admin o usuario normal
  @Column('text', { array: true, default: ['user'] })
  roles: string[];
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  //NOTA: agregar la relacion con Transactions
  // @OneToMany(() => Transaction, (transaction) => transaction.user)
  // transactions: Transaction[];
}
