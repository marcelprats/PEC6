import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PriceFormatPipe } from './pipes/price-format.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { DefaultImagePipe } from './pipes/default-image.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    PriceFormatPipe,
    DefaultImagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

