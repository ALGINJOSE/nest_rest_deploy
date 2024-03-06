import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly UserRepository: Repository<User>,
) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
        try {
            const value: User = new User();
            value.email = createUserDto.email;
            value.password = createUserDto.password;
            return this.UserRepository.save(value);
        } catch (error) {
            throw new Error('Error occurred while creating value.');
        }
    }

  async findAll(): Promise<User[]> {
    try {
        return await this.UserRepository.find();
    } catch (error) {
        throw new Error('Error occurred while retrieving values.');
    }
}

  async findOne(id: number): Promise<User> {
    try {
        const value = await this.UserRepository.findOne({ where: { id } });
        if (!value) {
            throw new NotFoundException('value not found');
        }
        return value;
    } catch (error) {
        throw new Error('Error occurred while retrieving value.');
    }
}

async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
  try {
      const value: User = new User();
      value.email = updateUserDto.email;
      value.password = updateUserDto.password;
      value.id = id;
      return this.UserRepository.save(value);
  } catch (error) {
      throw new Error('Error occurred while updating value.');
  }
}
async remove(id: number): Promise<{ affected?: number }> {
  try {
      return this.UserRepository.delete(id);
  } catch (error) {
      throw new Error('Error occurred while deleting value.');
  }
}
}
