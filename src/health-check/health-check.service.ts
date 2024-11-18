import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  HEALTH_CHECK_SERVICE_NAME,
  HealthCheckClient,
  HealthCheckRequest,
  HealthCheckResponse,
} from '../protogen/health_check.pb';
import { Observable } from 'rxjs';

@Injectable()
export class HealthCheckService implements OnModuleInit {
  private healthCheckGrpcService: HealthCheckClient;

  constructor(@Inject(HEALTH_CHECK_SERVICE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.healthCheckGrpcService = this.client.getService<HealthCheckClient>(
      HEALTH_CHECK_SERVICE_NAME,
    );
  }

  public async checkServiceHealth(
    request: HealthCheckRequest,
  ): Promise<Observable<HealthCheckResponse>> {
    return this.healthCheckGrpcService.checkServiceHealth(request);
  }
}
