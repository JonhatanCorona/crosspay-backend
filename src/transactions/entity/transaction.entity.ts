import { CurrencyEnum } from 'common/enum/currency.enum';
import { DocumentTypeEnum } from 'common/enum/documentType.enum';
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import { customAlphabet } from 'nanoid'; 

const generateNanoId = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);

@Entity()
export class Transaction {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  id: string; 

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  
  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = generateNanoId();
    }
  }
}