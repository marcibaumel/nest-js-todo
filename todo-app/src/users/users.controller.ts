/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get('/starwars')
    getStarWars(@Query('id') id) {
        this.userService.getStarWarsData(id)
    }

    //GET: /users/
    @Get()
    findAll() {
        return []
    }

    /*
    //WATERFALL:
    @Get('interns')
    findAllInterns(){
        return []
    }
    */

    //GET: /users/:id
    @Get(':id')
    findOneById(@Param('id') id){
        return {id}
    }
    

    //POST: /users

    //PUT: /users/:id

    //DELETE: /users/:id
}
