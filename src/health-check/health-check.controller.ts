import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './health-check.service';
import { HealthCheckRequest } from 'src/protogen/health_check.pb';

@Controller('health')
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get('/')
  public async checkServiceHEalth() {
    return this.healthCheckService.checkServiceHealth({} as HealthCheckRequest);
  }
}
