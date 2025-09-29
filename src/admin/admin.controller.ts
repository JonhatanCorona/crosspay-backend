import { Controller, Get, Patch, Delete, Param, Body, UseGuards, Query } from '@nestjs/common';
import { AdminService, TransactionResponseDto } from './admin.service';
import { JwtAuthGuard } from 'common/guards/jwt-auth.guard';

@Controller('admin')
@UseGuards(JwtAuthGuard) 
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('transactions')
  async listTransactions(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ): Promise<TransactionResponseDto[]> {
    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 10;


    return this.adminService.listTransactions(pageNumber, limitNumber);
  }
}

