import { Test, TestingModule } from '@nestjs/testing';
import { BookmarkCollectionService } from './bookmark-collection.service';

describe('BookmarkCollectionService', () => {
  let service: BookmarkCollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookmarkCollectionService],
    }).compile();

    service = module.get<BookmarkCollectionService>(BookmarkCollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
