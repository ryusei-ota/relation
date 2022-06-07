import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutPostsInput } from '../category/category-create-nested-many-without-posts.input';

@InputType()
export class PostCreateWithoutAuthorInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => CategoryCreateNestedManyWithoutPostsInput, {nullable:true})
    categories?: CategoryCreateNestedManyWithoutPostsInput;
}
