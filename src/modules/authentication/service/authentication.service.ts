import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { DBService } from 'src/libs/database/db/db.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthenticationService {
  constructor(
    private readonly DB: DBService,
    private readonly jwtService: JwtService,
  ) {
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
      const saltVal = 7;
      if (!req.body.pass) {
        //
      }
      req.body.pass = await bcrypt.hash(req.body.pass, saltVal);
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

  async logInUser(req: Request, res: Response) {
    try {
      if (!req.body.pass || !req.body.email) {
        throw new BadRequestException();
      }
      const userData = await this.DB.users.findFirst({
        where: {
          email: req.body.email,
        },
      });

      if (!userData) {
        return res.json({
          message: 'user does not exist',
        });
      }

      const check = await bcrypt.compare(req.body.pass, userData.pass);
      if (!check) {
        throw new UnauthorizedException();
      }
      const tokenObj = {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        role_id: userData.role_id,
      };
      const token = await this.jwtService.signAsync(tokenObj);
      res.header('token', token);
      res.send({
        message: 'Login successfully',
      });
    } catch (e: any) {
      res.json({
        message: e.message,
      });
    }
  }
}
