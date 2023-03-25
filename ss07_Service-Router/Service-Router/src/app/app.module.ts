import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './component/practice/timelines/timelines.component';
import { YoutubePlaylistComponent } from './component/practice/angular-product-management/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './component/practice/angular-product-management/youtube-player/youtube-player.component';
import { ProductListComponent } from './component/practice/angular-product-2-management/product/product-list/product-list.component';
import { ProductCreateComponent } from './component/practice/angular-product-2-management/product/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DictionaryPageComponent } from './component/exercise/dictionary/dictionary/dictionay-page/dictionary-page.component';
import { DictionaryDetailComponent } from './component/exercise/dictionary/dictionary/dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
