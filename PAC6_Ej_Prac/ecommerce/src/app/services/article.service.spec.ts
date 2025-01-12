import { TestBed } from '@angular/core/testing';
import { ArticleService } from './article.service';

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
      expect(articles.length).toBe(3);
      done();
    });
  });

  it('should change article quantity', (done: DoneFn) => {
    service.changeQuantity(1, 5).subscribe(article => {
      expect(article.quantity).toBe(15); // Inicialmente era 10
      done();
    });
  });

  it('should add a new article', (done: DoneFn) => {
    const newArticle = { id: 4, name: 'Artículo 4', quantity: 20 };
    service.create(newArticle).subscribe(article => {
      expect(article.name).toBe('Artículo 4');
      done();
    });
  });
});
