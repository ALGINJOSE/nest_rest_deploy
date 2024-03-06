import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  UserRepository: any;
  create(_createUserDto: CreateUserDto) {
    return this.UserRepository.save(User);
  }

  async findAll() {
    return await this.UserRepository.find();
  }

  findOne(id: number) {
    return User;
  }

  update(_id: number, _updateUserDto: UpdateUserDto) {
    return this.UserRepository.save(User);
  }

  remove(id: number) {
    return this.UserRepository.delete(id);
  }
}
