import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private cfg: ConfigService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const adminEmail = this.cfg.get('ADMIN_EMAIL');
    const adminPassword = this.cfg.get('ADMIN_PASSWORD');

    if (email === adminEmail && password === adminPassword) {
      const payload = { email, role: 'admin' };
      const token = this.jwtService.sign(payload, { expiresIn: '15m' });
      return { access_token: token, expiresIn: 900 };
    }
    throw new UnauthorizedException();
  }
}