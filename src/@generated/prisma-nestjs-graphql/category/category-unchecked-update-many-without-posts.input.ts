import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutPostsInput } from './category-create-or-connect-without-posts.input';
import { CategoryUpsertWithWhereUniqueWithoutPostsInput } from './category-upsert-with-where-unique-without-posts.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithWhereUniqueWithoutPostsInput } from './category-update-with-where-unique-without-posts.input';
import { CategoryUpdateManyWithWhereWithoutPostsInput } from './category-update-many-with-where-without-posts.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';

@InputType()
export class CategoryUncheckedUpdateManyWithoutPostsInput {

    @Field(() => [CategoryCreateWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateWithoutPostsInput)
    create?: Array<CategoryCreateWithoutPostsInput>;

    @Field(() => [CategoryCreateOrConnectWithoutPostsInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPostsInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutPostsInput>;

    @Field(() => [CategoryUpsertWithWhereUniqueWithoutPostsInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutPostsInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutPostsInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<CategoryWhereUniqueInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<CategoryWhereUniqueInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<CategoryWhereUniqueInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<CategoryWhereUniqueInput>;

    @Field(() => [CategoryUpdateWithWhereUniqueWithoutPostsInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutPostsInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutPostsInput>;

    @Field(() => [CategoryUpdateManyWithWhereWithoutPostsInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutPostsInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutPostsInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}
