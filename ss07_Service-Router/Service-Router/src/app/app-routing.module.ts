import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from "./component/practice/timelines/timelines.component";
import {YoutubePlaylistComponent} from "./component/practice/angular-product-management/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./component/practice/angular-product-management/youtube-player/youtube-player.component";


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
