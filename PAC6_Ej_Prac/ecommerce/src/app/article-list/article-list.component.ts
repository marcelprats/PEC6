import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  searchTerm: string = '';

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(query?: string): void {
    this.articleService.getArticles(query).subscribe(data => {
      this.articles = data;
    });
  }

  onSearch(): void {
    this.loadArticles(this.searchTerm);
  }
}
