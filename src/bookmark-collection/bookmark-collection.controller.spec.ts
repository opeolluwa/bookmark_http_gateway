import { Test, TestingModule } from '@nestjs/testing';
import { BookmarkCollectionController } from './bookmark-collection.controller';

describe('BookmarkCollectionController', () => {
  let controller: BookmarkCollectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookmarkCollectionController],
    }).compile();

    controller = module.get<BookmarkCollectionController>(BookmarkCollectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
