import { Injectable } from '@nestjs/common';
import type { Request, Response } from 'express';
import { DBService } from 'src/libs/database/db/db.service';
@Injectable()
export class AuthenticationService {
  constructor(private readonly DB: DBService) {
    //
  }

  async getAll(req: Request, res: Response) {
    res.json({
      messge: 'testing...',
    });
  }

  async createRole(req: Request, res: Response) {
    try {
      const resData = await this.DB.roles.create({
        data: req.body,
      });
      res.send({
        data: resData,
      });
    } catch (e: any) {
      res.json({
        message: e.message,
      });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const resData = await this.DB.users.create({
        data: req.body,
      });
      res.send({
        data: resData,
      });
    } catch (e: any) {
      res.json({
        message: e.message,
      });
    }
  }
}
