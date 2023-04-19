import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {
    //
  }
  async use(req: Request, res: Response, next: NextFunction) {
    const token: string = req['headers']
      ? req['headers']['authorization']
      : undefined;
    console.log('token', token);
    if (!token) {
      throw new UnauthorizedException();
    }
    const check = await this.jwtService.verifyAsync(token);
    console.log('check', check);
    if (!check) {
      return res.json({
        message: 'Invalid token',
      });
    }
    console.log('middlware passed...');
    next();
  }
}
