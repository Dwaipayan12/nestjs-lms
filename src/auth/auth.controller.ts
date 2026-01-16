import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  //   @Post('login')
  //   login() {
  //     return { message: 'User registered sucessfully' };
  //   }

  //this way
  constructor(private authService: AuthService) {}
  //another way for constructor
  //   authService: AuthService;
  //   constructor(authService: AuthService) {
  //     this.authService = authService;
  //   }

  @Post('/register')
  register() {
    const result = this.authService.register();
    return result;
  }
}
