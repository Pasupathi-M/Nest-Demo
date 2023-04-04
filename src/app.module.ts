import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './controllers/authentication/authentication.module';
import { UsersModule } from './controllers/users/users.module';

import { AuthMiddleware } from './middlewares/auth/auth.middleware';
import { DbService } from './db/db.service';

@Module({
  imports: [AuthenticationModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('users');
  }
}
