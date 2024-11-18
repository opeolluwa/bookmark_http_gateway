import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckModule } from './health-check/health-check.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { BookmarkCollectionModule } from './bookmark-collection/bookmark-collection.module';
import { BookmarkCollectionEntriesModule } from './bookmark-collection-entries/bookmark-collection-entries.module';
import { AuthenticationModule } from './authentication/authentication.module';
@Module({
  imports: [
    HealthCheckModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    BookmarkCollectionModule,
    BookmarkCollectionEntriesModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
