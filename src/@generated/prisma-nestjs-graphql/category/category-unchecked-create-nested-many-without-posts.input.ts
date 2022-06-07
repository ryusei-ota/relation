import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutPostsInput } from './category-create-or-connect-without-posts.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryUncheckedCreateNestedManyWithoutPostsInput {

    @Field(() => [CategoryCreateWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateWithoutPostsInput)
    create?: Array<CategoryCreateWithoutPostsInput>;

    @Field(() => [CategoryCreateOrConnectWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPostsInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutPostsInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<CategoryWhereUniqueInput>;
}
