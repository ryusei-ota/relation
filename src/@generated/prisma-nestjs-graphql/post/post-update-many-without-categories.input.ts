import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutCategoriesInput } from './post-create-or-connect-without-categories.input';
import { PostUpsertWithWhereUniqueWithoutCategoriesInput } from './post-upsert-with-where-unique-without-categories.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithWhereUniqueWithoutCategoriesInput } from './post-update-with-where-unique-without-categories.input';
import { PostUpdateManyWithWhereWithoutCategoriesInput } from './post-update-many-with-where-without-categories.input';
import { PostScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class PostUpdateManyWithoutCategoriesInput {

    @Field(() => [PostCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => PostCreateWithoutCategoriesInput)
    create?: Array<PostCreateWithoutCategoriesInput>;

    @Field(() => [PostCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [PostUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutCategoriesInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;

    @Field(() => [PostUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutCategoriesInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [PostUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutCategoriesInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutCategoriesInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}
