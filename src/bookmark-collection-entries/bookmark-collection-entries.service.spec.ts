import { Test, TestingModule } from '@nestjs/testing';
import { BookmarkCollectionEntriesService } from './bookmark-collection-entries.service';

describe('BookmarkCollectionEntriesService', () => {
  let service: BookmarkCollectionEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookmarkCollectionEntriesService],
    }).compile();

    service = module.get<BookmarkCollectionEntriesService>(BookmarkCollectionEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
