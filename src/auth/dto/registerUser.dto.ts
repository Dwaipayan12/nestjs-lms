import { IsEmail, IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  fname: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  lname: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEmail()
  email: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  phone: number;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  password: string;
}
