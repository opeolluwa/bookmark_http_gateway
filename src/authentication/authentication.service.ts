import { Body, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AUTHENTICATION_SERVICE_NAME,
  AuthenticationClient,
} from 'src/protogen/authentication.pb';
import { LoginDTO, SignUpDTO } from './authentication.dto';

@Injectable()
export class AuthenticationService implements OnModuleInit {
  private authenticationGrpcService: AuthenticationClient;

  constructor(
    @Inject(AUTHENTICATION_SERVICE_NAME) private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.authenticationGrpcService =
      this.client.getService<AuthenticationClient>(AUTHENTICATION_SERVICE_NAME);
  }

  public async signUp(@Body() payload: SignUpDTO) {
    return this.authenticationGrpcService.signUp(payload);
  }

  public async login(@Body() payload: LoginDTO) {
    return this.authenticationGrpcService.login(payload);
  }

  public async verifyAccount() {}

  public async forgottenPassword() {}

  public async setNewPassword() {}

  public async enable2Fa() {}
}
