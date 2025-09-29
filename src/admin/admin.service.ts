import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'src/transactions/entity/transaction.entity';
import { Repository } from 'typeorm';

export class TransactionResponseDto {
  id: string;
  currency: string;
  amount: number;
  description: string;
  name: string;
  documentType: string;
  createdAt: string;
}

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepo: Repository<Transaction>,
  ) {}

  // Listar todas las transacciones
async listTransactions(
  page: number,
  limit: number,

): Promise<TransactionResponseDto[]> {
  const skip = (page - 1) * limit; 
  const take = limit;

  const transactions = await this.transactionRepo.find({
    skip,
    take,
    order: { createdAt: 'DESC' },
  });

  return transactions.map(t => ({
    id: t.id,
    currency: t.currency,
    amount: t.amount,
    description: t.description,
    name: t.name,
    documentType: t.documentType,
    createdAt: t.createdAt.toISOString(),
  }));
}
}

