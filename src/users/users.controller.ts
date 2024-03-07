import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            return await this.usersService.create(createUserDto);
        } catch (error) {
            throw error;
        }
    }

    @Get()
    async findAll() {
        try {
            return await this.usersService.findAll();
        } catch (error) {
            throw error;
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        try{
            return this.usersService.findOne(+id)
    }   catch(err){
            throw new NotFoundException()
        }
        
    };

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        try {
            return await this.usersService.update(+id, updateUserDto);
        } catch (error) {
            throw error;
        }
    }

  @Delete(':id')
    async remove(@Param('id') id: string) {
        try {
            return await this.usersService.remove (+id);
        } catch (error) {
            throw error;
        }
    }
}