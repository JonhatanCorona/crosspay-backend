import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Transaction } from 'src/transactions/entity/transaction.entity';

@Module({
   imports: [
    TypeOrmModule.forFeature([Transaction]), 
    JwtModule, 
  ],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
