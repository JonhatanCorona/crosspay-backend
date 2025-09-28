import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import typeOrmConfig from 'config/typeorm-config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TransactionsModule,
    AdminModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
