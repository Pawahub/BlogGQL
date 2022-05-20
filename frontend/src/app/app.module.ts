import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { MarkdownModule } from "ngx-markdown";

import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleComponent } from "./article/article.component";
import { CategoryComponent } from "./category/category.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticlesComponent,
    ArticleComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GraphQLModule,
    MarkdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
