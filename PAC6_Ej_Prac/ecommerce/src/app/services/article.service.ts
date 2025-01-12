import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Article {
  id: number;
  name: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [
    { id: 1, name: 'Artículo 1', quantity: 10 },
    { id: 2, name: 'Artículo 2', quantity: 5 },
  ];

  constructor() {}

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    const article = this.articles.find(a => a.id === articleID);
    if (article) {
      article.quantity += changeInQuantity;
      return of(article);
    }
    throw new Error('Artículo no encontrado');
  }

  create(article: Article): Observable<Article> {
    this.articles.push(article);
    return of(article);
  }
}
