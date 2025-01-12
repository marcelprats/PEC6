import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  increaseQuantity(article: Article): void {
    this.articleService.changeQuantity(article.id, 1).subscribe(updatedArticle => {
      article.quantity = updatedArticle.quantity;
    });
  }

  decreaseQuantity(article: Article): void {
    this.articleService.changeQuantity(article.id, -1).subscribe(updatedArticle => {
      article.quantity = updatedArticle.quantity;
    });
  }
}
