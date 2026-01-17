import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  createUser() {
    return { message: 'user sucesfully created' };
  }
}
