import { TestBed } from '@angular/core/testing';
import { ArticleService } from './article.service';
import { Article } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all articles', (done: DoneFn) => {
    service.getArticles().subscribe(articles => {
      expect(articles.length).toBe(2); 
      done();
    });
  });

  it('should change article quantity', (done: DoneFn) => {
    service.changeQuantity(1, 5).subscribe(article => {
      expect(article.quantity).toBe(15);
      done();
    });
  });

});
