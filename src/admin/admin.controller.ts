import { Controller, Get, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from 'common/guards/jwt-auth.guard';
import { StatusEnum } from 'common/enum/status.enum';


@Controller('admin')
@UseGuards(JwtAuthGuard) // Aplica guard a todos los endpoints
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Listar todas las transacciones
  @Get('transactions')
  listTransactions() {
    return this.adminService.listTransactions();
  }

  // Obtener una transacción específica
  @Get('transactions/:id')
  getTransaction(@Param('id') id: number) {
    return this.adminService.getTransactionById(id);
  }

  // Cambiar el status de una transacción
  @Patch('transactions/:id/status')
  updateStatus(
    @Param('id') id: number,
    @Body('status') status: StatusEnum,
  ) {
    return this.adminService.changeTransactionStatus(id, status);
  }

  // Eliminar una transacción
  @Delete('transactions/:id')
  deleteTransaction(@Param('id') id: number) {
    this.adminService.deleteTransaction(id);
    return "Transaccion Eliminada Correctamente"
  }
}
