import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './component/practice/timelines/timelines.component';
import { YoutubePlaylistComponent } from './component/practice/angular-product-management/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './component/practice/angular-product-management/youtube-player/youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
