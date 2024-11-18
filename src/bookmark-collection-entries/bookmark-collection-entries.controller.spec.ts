import { Test, TestingModule } from '@nestjs/testing';
import { BookmarkCollectionEntriesController } from './bookmark-collection-entries.controller';

describe('BookmarkCollectionEntriesController', () => {
  let controller: BookmarkCollectionEntriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookmarkCollectionEntriesController],
    }).compile();

    controller = module.get<BookmarkCollectionEntriesController>(BookmarkCollectionEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
