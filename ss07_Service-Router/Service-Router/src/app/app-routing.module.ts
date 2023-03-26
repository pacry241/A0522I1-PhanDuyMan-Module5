import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from "./component/practice/timelines/timelines.component";
import {YoutubePlaylistComponent} from "./component/practice/angular-product-management/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./component/practice/angular-product-management/youtube-player/youtube-player.component";
import {ProductListComponent} from "./component/practice/angular-product-2-management/product/product-list/product-list.component";
import {ProductCreateComponent} from "./component/practice/angular-product-2-management/product/product-create/product-create.component";
import {DictionaryPageComponent} from "./component/exercise/dictionary/dictionary/dictionay-page/dictionary-page.component";
import {ProductDetailComponent} from "./component/practice/angular-product-2-management/product/product-detail/product-detail.component";
import {ProductDeleteComponent} from "./component/practice/angular-product-2-management/product/product-delete/product-delete.component";
import {ProductUpdateComponent} from "./component/practice/angular-product-2-management/product/product-update/product-update.component";
import {DictionaryDetailComponent} from "./component/exercise/dictionary/dictionary/dictionary-detail/dictionary-detail.component";


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
  {path:"list",component:ProductListComponent},
  {path:"detail/:index",component:ProductDetailComponent},
  {path:"delete/:index",component:ProductDeleteComponent},
  {path:"update/:index",component:ProductUpdateComponent},
  {path:"create",component:ProductCreateComponent},
  {path: 'dictionary',component: DictionaryPageComponent},
  {path: 'word/detail/:word', component: DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
