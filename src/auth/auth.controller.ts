import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { LoginDto } from './dto/loginUser.dto';
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

  @Post('register')
  register(@Body() registerUserDto: RegisterDto) {
    const result = this.authService.register(registerUserDto);
    return result;
  }
  @Post('login')
  login(@Body() logindto: LoginDto) {
    console.log(logindto);
    const result = this.authService.login(logindto);
    return result;
  }
}
