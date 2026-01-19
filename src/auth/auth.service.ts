import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/registerUser.dto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/loginUser.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerdto: RegisterDto) {
    console.log('registerUserDto', registerdto);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const hashpassword = await bcrypt.hash(registerdto.password, 10);
    const userdata = {
      ...registerdto,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      password: hashpassword,
    };
    const ans = this.userService.createUser(userdata);
    const payload = { sub: (await ans)._id };
    const token = await this.jwtService.signAsync(payload);
    console.log(token);
    return token;
  }
  async login(logindto: LoginDto) {
    // const hashpassword = await bcrypt.hash(logindto.password, 10);
    // const loginCredentilas = {
    //   ...logindto,
    //   password: hashpassword,
    // };
    const ans = this.userService.loginUser(logindto);
    return ans;
  }
}
