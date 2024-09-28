import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users' })
export class User {
  @Prop()
  name: string;

  @Prop({ required: true, index: true })
  device_id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
