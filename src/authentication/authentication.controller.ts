import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginDTO, SignUpDTO } from './authentication.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('/sign-up')
  public async signUp(@Body() payload: SignUpDTO) {
    return this.authenticationService.signUp(payload);
  }

  @Post('/login')
  public async login(@Body() payload: LoginDTO) {
    return this.authenticationService.login(payload);
  }
}
