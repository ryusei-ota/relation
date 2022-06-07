import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';
import { CategoryCreateNestedManyWithoutPostsInput } from '../category/category-create-nested-many-without-posts.input';

@InputType()
export class PostCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: UserCreateNestedOneWithoutPostsInput;

    @Field(() => CategoryCreateNestedManyWithoutPostsInput, {nullable:true})
    categories?: CategoryCreateNestedManyWithoutPostsInput;
}
