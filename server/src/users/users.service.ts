import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user_in: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(user_in);
    return createdUser.save();
  }

  async get(device_id: string): Promise<User> {
    const user = await this.userModel.findOne({ device_id }).exec();
    if (!user) {
      throw new NotFoundException(`User with device_id ${device_id} not found`);
    }
    return user;
  }
}
