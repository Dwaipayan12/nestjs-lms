import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { LoginDto } from './dto/loginUser.dto';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from './auth.guard';
@Controller('auth')
export class AuthController {
  //   @Post('login')
  //   login() {
  //     return { message: 'User registered sucessfully' };
  //   }

  //this way
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}
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
  @UseGuards(AuthGuard)
  @Get('profile')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getProfile(@Req() req: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const userId = req.user.sub;
    const user = await this.userService.getUserById(userId);
    console.log(user);
    return user;
  }
}
