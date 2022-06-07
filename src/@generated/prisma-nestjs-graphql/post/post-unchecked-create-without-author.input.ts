import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutPostsInput } from '../category/category-unchecked-create-nested-many-without-posts.input';

@InputType()
export class PostUncheckedCreateWithoutAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => CategoryUncheckedCreateNestedManyWithoutPostsInput, {nullable:true})
    categories?: CategoryUncheckedCreateNestedManyWithoutPostsInput;
}
