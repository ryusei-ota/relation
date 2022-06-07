import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersResolver } from './user.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UsersService, UsersResolver, PrismaService],
  exports: [UsersService],
})
export class UserModule {}
