import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './libs/database/database.module';
import { MovieModule } from './modules/movie/movie.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthMiddleware } from './middlewares/auth.middleware';
@Module({
  imports: [
    DatabaseModule,
    MovieModule,
    AuthenticationModule,
    JwtModule.register({
      global: true,
      secret: 'No secrets',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  // exports: [DatabaseModule],
})
export class AppModule implements NestModule {
  constructor() {
    //
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('users/all-users');
  }
}
