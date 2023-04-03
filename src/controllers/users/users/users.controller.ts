import {
  Controller,
  Req,
  Res,
  Get,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '../../../guards/auth/auth.guard';
import { UsersService } from '../../../services/users/users/users.service';
@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private userServices: UsersService) {}
  @Get('all-users')
  async getAllUsers(@Req() req: Request, @Res() res: Response) {
    //
  }

  @Get('user/:id/:new/:new1')
  async getbyId(@Req() req: Request, @Res() res: Response) {
    console.log('params', req.params);
    console.log('query', req.query);
    this.userServices.createUser(req, res);
  }

  @Post('user')
  async createUser(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    return res.json({
      message: 'Printed',
    });
  }
}
