import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { doubleCsrf } from 'csrf-csrf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();

  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
