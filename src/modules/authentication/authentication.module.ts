import { Module } from '@nestjs/common';
import { AuthenticationController } from './controller/authentication.controller';
import { AuthenticationService } from './service/authentication.service';
import { DBService } from 'src/libs/database/db/db.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'No secrets',
      // signOptions: { expiresIn: '5h'}
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, DBService],
})
export class AuthenticationModule {}
