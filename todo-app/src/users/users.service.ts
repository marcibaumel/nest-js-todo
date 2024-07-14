/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UsersService {

    async getStarWarsData(id: string) {
        const data = await axios({
            method: 'get',
            url: `https://swapi.dev/api/people/${id}`
        })
            .then(result => {
                let response = result.data;
                let name = response.name;
                console.log(name)
            });

    }
}
