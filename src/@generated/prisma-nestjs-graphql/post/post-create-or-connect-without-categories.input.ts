import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';

@InputType()
export class PostCreateOrConnectWithoutCategoriesInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => PostCreateWithoutCategoriesInput)
    create!: PostCreateWithoutCategoriesInput;
}
