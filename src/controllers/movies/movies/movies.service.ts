import { Injectable, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { DBService } from 'src/database/db/db.service';

@Injectable()
export class MoviesService {
  constructor(private readonly DB: DBService) {
    //
  }

  async getAll(req: Request, res: Response) {
    res.send({
      message: 'Hi',
    });
  }

  async create(@Req() req: Request, @Res() res: Response) {
    const response = await this.DB.movies.create({
      data: req.body,
    });
    res.send({
      response,
    });
  }
}
