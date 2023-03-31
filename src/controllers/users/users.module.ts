import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from 'src/services/users/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
