import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPostsInput } from '../user/user-update-one-required-without-posts.input';
import { CategoryUpdateManyWithoutPostsInput } from '../category/category-update-many-without-posts.input';

@InputType()
export class PostUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPostsInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutPostsInput;

    @Field(() => CategoryUpdateManyWithoutPostsInput, {nullable:true})
    categories?: CategoryUpdateManyWithoutPostsInput;
}
