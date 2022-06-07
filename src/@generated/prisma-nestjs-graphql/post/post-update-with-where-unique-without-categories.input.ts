import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutCategoriesInput } from './post-update-without-categories.input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => PostUpdateWithoutCategoriesInput)
    data!: PostUpdateWithoutCategoriesInput;
}
