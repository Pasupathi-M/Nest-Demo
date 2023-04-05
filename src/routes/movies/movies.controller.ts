import {
  Controller,
  Req,
  Res,
  Get,
  Post,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { MoviesService } from 'src/controllers/movies/movies/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private movieServics: MoviesService) {
    //
  }

  @Get('/all-movies')
  getAll(@Req() req: Request, @Res() res: Response) {
    this.movieServics.getAll(req, res);
  }

  @Post('/add-movie')
  createMovie(@Req() req: Request, @Res() res: Response) {
    this.movieServics.create(req, res);
  }
}
