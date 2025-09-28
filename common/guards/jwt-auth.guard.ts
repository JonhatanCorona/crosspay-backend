import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const req: Request = context.switchToHttp().getRequest();
    const authHeader = req.headers['authorization'];

    if (!authHeader) throw new UnauthorizedException('Missing Authorization header');

    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) throw new UnauthorizedException('Invalid token');

    try {
      const payload = this.jwtService.verify(token, {
    secret: process.env.JWT_SECRET || 'changeme_in_prod',
  });
      req['user'] = payload; // opcional, para acceder a payload en controller
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
