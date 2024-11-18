import { Module } from '@nestjs/common';
import { BookmarkCollectionEntriesService } from './bookmark-collection-entries.service';
import { BookmarkCollectionEntriesController } from './bookmark-collection-entries.controller';

@Module({
  providers: [BookmarkCollectionEntriesService],
  controllers: [BookmarkCollectionEntriesController]
})
export class BookmarkCollectionEntriesModule {}
