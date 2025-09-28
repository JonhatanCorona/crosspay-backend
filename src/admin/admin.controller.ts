import { Controller, Get, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AdminService, TransactionResponseDto } from './admin.service';
import { JwtAuthGuard } from 'common/guards/jwt-auth.guard';


@Controller('admin')
@UseGuards(JwtAuthGuard) // Aplica guard a todos los endpoints
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Listar todas las transacciones
  @Get('transactions')
  listTransactions(): Promise<TransactionResponseDto[]>{
    return this.adminService.listTransactions();
  }
}
