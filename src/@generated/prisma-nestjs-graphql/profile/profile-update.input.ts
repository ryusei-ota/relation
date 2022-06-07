import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutProfileInput } from '../user/user-update-one-required-without-profile.input';

@InputType()
export class ProfileUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutProfileInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutProfileInput;
}
