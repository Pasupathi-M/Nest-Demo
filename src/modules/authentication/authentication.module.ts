import { Module } from '@nestjs/common';
import { AuthenticationController } from './controller/authentication.controller';
import { AuthenticationService } from './service/authentication.service';
import { DBService } from 'src/libs/database/db/db.service';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, DBService],
})
export class AuthenticationModule {}
