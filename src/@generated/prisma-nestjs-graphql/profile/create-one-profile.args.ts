import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileCreateInput } from './profile-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneProfileArgs {

    @Field(() => ProfileCreateInput, {nullable:false})
    @Type(() => ProfileCreateInput)
    @ValidateNested()
    @Type(() => ProfileCreateInput)
    data!: ProfileCreateInput;
}
