import { Module } from '@nestjs/common';
import { BookmarkCollectionService } from './bookmark-collection.service';
import { BookmarkCollectionController } from './bookmark-collection.controller';

@Module({
  providers: [BookmarkCollectionService],
  controllers: [BookmarkCollectionController]
})
export class BookmarkCollectionModule {}
