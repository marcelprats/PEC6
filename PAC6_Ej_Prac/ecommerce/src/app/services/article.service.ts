import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Article {
  id: number;
  name: string;
  quantity: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  getArticles(query?: string): Observable<Article[]> {
    const url = query ? `${this.apiUrl}?q=${query}` : this.apiUrl;
    return this.http.get<Article[]>(url);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    return this.http.patch<Article>(`${this.apiUrl}/${articleID}`, { changeInQuantity });
  }

  create(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }
}
