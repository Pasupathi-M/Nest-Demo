import { Module } from '@nestjs/common';
import { AuthenticationsController } from './authentications/authentications.controller';
import { AuthenticationsService } from 'src/services/authentication/authentications/authentications.service';

@Module({
  controllers: [AuthenticationsController],
  providers: [AuthenticationsService],
})
export class AuthenticationModule {}
