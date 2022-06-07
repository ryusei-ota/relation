import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from './user.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => User)
  user(@Args() args: FindFirstUserArgs) {
    return this.userService.findFirst(args);
  }

  @Mutation(() => User)
  async createUser(@Args() args: CreateOneUserArgs) {
    return this.userService.createUser(args);
  }

  @Query(() => [User])
  async findAll(@Args() args: FindManyUserArgs) {
    return await this.userService.findAll(args);
  }
}
