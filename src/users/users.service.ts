import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { User } from './schema/users.schema';
import { Model } from 'mongoose';
import { LoginDto } from 'src/auth/dto/loginUser.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}
  async createUser(registerdto: RegisterDto) {
    const existinguser = await this.userModel.findOne({
      email: registerdto.email,
    });
    if (existinguser) {
      throw new ConflictException('User alrewady exixts');
    }
    //this one
    return await this.userModel.create({
      fname: registerdto.fname,
      lname: registerdto.lname,
      email: registerdto.email,
      phone: registerdto.phone,
      password: registerdto.password,
    });
    //or this one
    // const user = new this.userModel(registerdto);
    // return user.save();
  }

  async loginUser(logindto: LoginDto) {
    const findUser = await this.userModel.findOne({
      email: logindto.email,
    });
    if (!findUser) {
      throw new UnauthorizedException('Invalid credentials of email');
    }
    const isPasswordMatch = await bcrypt.compare(
      logindto.password,
      findUser.password,
    );
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid Credentials of Password');
    }

    return {
      message: `${findUser.fname} is sucessfully login and your email is ${findUser.email}`,
    };
  }

  async getUserById(id: string) {
    return await this.userModel.findOne({ _id: id });
  }
}
