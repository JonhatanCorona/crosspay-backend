import { CurrencyEnum } from 'common/enum/currency.enum';
import { DocumentTypeEnum } from 'common/enum/documentType.enum';
import { StatusEnum } from 'common/enum/status.enum';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: CurrencyEnum })
  currency: CurrencyEnum;

  @Column('decimal', { precision: 12, scale: 2 })
  amount: number;

  @Column()
  description: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: DocumentTypeEnum })
  documentType: DocumentTypeEnum;

  @Column()
  cardNumber: string;

  @Column()
  cardExpiration: string;

  @Column()
  cardCVC: string;

  @Column({type: 'enum', enum: StatusEnum, default: StatusEnum.PENDING,})
  status: StatusEnum;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
