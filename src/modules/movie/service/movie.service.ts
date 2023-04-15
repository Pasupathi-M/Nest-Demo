import { Injectable } from '@nestjs/common';
import type { Request, Response } from 'express';
import { DBService } from 'src/libs/database/db/db.service';

@Injectable()
export class MovieService {
  constructor(private readonly DB: DBService) {
    //
  }

  async createMovie(req: Request, res: Response) {
    try {
      const resData = await this.DB.movies.create({ data: req.body });
      res.send(resData);
    } catch (e: any) {
      res.json({
        message: e.message,
      });
    }
  }
}
