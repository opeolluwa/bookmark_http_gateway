import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import {
  AUTHENTICATION_PACKAGE_NAME,
  AUTHENTICATION_SERVICE_NAME,
} from 'src/protogen/authentication.pb';

@Module({
  imports: [
    CacheModule.register(),
    ClientsModule.register([
      {
        name: AUTHENTICATION_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          package: AUTHENTICATION_PACKAGE_NAME,
          url: process.env.GRPC_ENDPOINT,
          protoPath: join(__dirname, '../proto/authentication.proto'),
        },
      },
    ]),
  ],
  providers: [AuthenticationService],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
