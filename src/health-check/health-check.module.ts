import { Module } from '@nestjs/common';
import { HealthCheckService } from './health-check.service';
import { HealthCheckController } from './health-check.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import {
  HEALTH_CHECK_PACKAGE_NAME,
  HEALTH_CHECK_SERVICE_NAME,
} from '../protogen/health_check.pb';
import { CacheModule } from '@nestjs/cache-manager';
@Module({
  imports: [
    CacheModule.register(),
    ClientsModule.register([
      {
        name: HEALTH_CHECK_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          package: HEALTH_CHECK_PACKAGE_NAME,
          protoPath: join(__dirname, '../proto/health_check.proto'),
        },
      },
    ]),
  ],
  providers: [HealthCheckService],
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
