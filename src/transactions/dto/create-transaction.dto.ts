import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, Length } from 'class-validator';
import { CurrencyEnum } from '../../../common/enum/currency.enum';
import { DocumentTypeEnum } from '../../../common/enum/documentType.enum';

export class CreateTransactionDto {
  @IsEnum(CurrencyEnum)
  @IsNotEmpty()
  currency: CurrencyEnum;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(DocumentTypeEnum)
  @IsNotEmpty()
  documentType: DocumentTypeEnum;

  @IsString()
  @Length(12, 19) // longitudes típicas de tarjeta
  @IsNotEmpty()
  cardNumber: string;

  @IsString()
  @Length(5, 5) // formato MM/YY
  @IsNotEmpty()
  cardExpiration: string;

  @IsString()
  @Length(3, 4)
  @IsNotEmpty()
  cardCVC: string;
}