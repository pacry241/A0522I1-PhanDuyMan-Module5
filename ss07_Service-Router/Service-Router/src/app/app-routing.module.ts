import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from "./component/practice/timelines/timelines.component";
import {YoutubePlaylistComponent} from "./component/practice/angular-product-management/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./component/practice/angular-product-management/youtube-player/youtube-player.component";
import {ProductListComponent} from "./component/practice/angular-product-2-management/product/product-list/product-list.component";
import {ProductCreateComponent} from "./component/practice/angular-product-2-management/product/product-create/product-create.component";
import {DictionaryPageComponent} from "./component/exercise/dictionary/dictionary/dictionay-page/dictionary-page.component";


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
  },
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {path: 'dictionary',component: DictionaryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
