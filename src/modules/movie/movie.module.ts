import { Module } from '@nestjs/common';
import { MovieController } from './controller/movie.controller';
import { MovieService } from './service/movie.service';
import { DBService } from 'src/libs/database/db/db.service';
import { AppLoggerService } from 'src/libs/logger/service/app-logger.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService, DBService, AppLoggerService],
})
export class MovieModule {}
