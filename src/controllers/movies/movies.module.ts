import { Module } from '@nestjs/common';
import { MoviesService } from './movies/movies.service';
import { MoviesController } from '../../routes/movies/movies.controller';
import { DBService } from 'src/database/db/db.service';

@Module({
  providers: [MoviesService, DBService],
  controllers: [MoviesController],
})
export class MoviesModule {}
