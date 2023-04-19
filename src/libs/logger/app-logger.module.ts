import { Module } from '@nestjs/common';
import { AppLoggerService } from './service/app-logger.service';

@Module({
  imports: [],
  providers: [AppLoggerService],
  exports: [AppLoggerService],
});
export class AppLogger {}
