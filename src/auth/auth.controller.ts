import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAdminDto } from './dto/login-admin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginAdminDto: LoginAdminDto) 
   {
    const { email, password } = loginAdminDto;
    return this.authService.login(email, password);
  }
}
