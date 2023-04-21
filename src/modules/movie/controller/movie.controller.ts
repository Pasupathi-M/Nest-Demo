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
import type { Request, Response } from 'express';
import { MovieService } from '../service/movie.service';
import { AppLoggerService } from '../../../libs/logger/service/app-logger.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('all-movies')
  getAll(@Req() req: Request, @Res() res: Response) {
    this.movieService.getAll(req, res);
  }

  @Post('add-movie')
  create(@Req() req: Request, @Res() res: Response) {
    this.movieService.createMovie(req, res);
  }
}
