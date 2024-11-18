import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';
import { LoginRequest, SignUpRequest } from 'src/protogen/authentication.pb';

export class SignUpDTO implements SignUpRequest {
  @IsEmail()
  email: string;
  @Min(8)
  password: string;
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
}

export class LoginDTO implements LoginRequest {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
