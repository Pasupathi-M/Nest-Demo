import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { AuthenticationService } from '../service/authentication.service';
import type { Request, Response } from 'express';

@Controller('users')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {
    //
  }

  @Get('all-users')
  getAlluser(@Req() req: Request, @Res() res: Response) {
    this.authenticationService.getAll(req, res);
  }

  @Post('user')
  createUser(@Req() req: Request, @Res() res: Response) {
    this.authenticationService.createUser(req, res);
  }

  @Post('role')
  createRole(@Req() req: Request, @Res() res: Response) {
    this.authenticationService.createRole(req, res);
  }
}
