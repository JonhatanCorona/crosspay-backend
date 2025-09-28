import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusEnum } from 'common/enum/status.enum';
import { Transaction } from 'src/transactions/entity/transaction.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepo: Repository<Transaction>,
  ) {}

  // Listar todas las transacciones
  async listTransactions(): Promise<Transaction[]> {
    return this.transactionRepo.find();
  }

  // Obtener una transacción por ID
  async getTransactionById(id: number): Promise<Transaction> {
    const transaction = await this.transactionRepo.findOneBy({ id });
    if (!transaction) throw new NotFoundException('Transaction not found');
    return transaction;
  }

  // Cambiar el status de una transacción
  async changeTransactionStatus(id: number, status: StatusEnum): Promise<Transaction> {
    const transaction = await this.getTransactionById(id);
    transaction.status = status;
    return this.transactionRepo.save(transaction);
  }

  // Eliminar transacción 
  async deleteTransaction(id: number): Promise<void> {
    await this.transactionRepo.delete(id);
  }
}

