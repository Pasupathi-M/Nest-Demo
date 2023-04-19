import { Injectable, LoggerService } from '@nestjs/common';
import { createLogger, format, transport } from 'winston';

@Injectable()
export class AppLoggerService implements LoggerService {
  logger!: Record<string, any>;
  constructor() {
    this.logger = createLogger();
  }

  private loggerFormat() {
    //
  }

  log(message: unknown, level = 'info'): void {
    // const log = createLogger({
    //   format: format.combine(
    //     //
    //   )
    // })
  }

  error(
    message: unknown,
    stack?: unknown,
    context?: unknown,
    ...rest: unknown[]
  ): void {}

  debug(message: unknown, context?: unknown, ...rest: unknown[]): void {}

  warn(message: unknown, context?: unknown, ...rest: unknown[]): void {}

  verbose(message: unknown, context?: unknown, ...rest: unknown[]): void {}
}
