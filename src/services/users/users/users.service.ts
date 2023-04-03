import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class UsersService {
  async createUser(req: Request, res: Response) {
    console.log('Service called...');
    res.send({
      message: 'Service file worked',
    });
  }
}
