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

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post('add-movie')
  create(@Req() req: Request, @Res() res: Response) {
    this.movieService.createMovie(req, res);
  }
}
