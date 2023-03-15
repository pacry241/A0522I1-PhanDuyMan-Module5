import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './component/article/article.component';
import {FormsModule} from "@angular/forms";
import { LikeComponent } from './component/like/like.component';
import { NarbavComponent } from './component/narbav/narbav.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddNewArticleComponent } from './component/add-new-article/add-new-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    NarbavComponent,
    FooterComponent,
    AddNewArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
