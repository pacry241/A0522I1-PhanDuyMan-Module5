import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from "./list-product/list-product.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";
import {DeleteComponent} from "./delete/delete.component";
import {UpdateComponent} from "./update/update.component";
import {CreatProductComponent} from "./creat-product/creat-product.component";


const routes: Routes = [
  {path:"list",component:ListProductComponent},
  {path:"detail/:index",component:DetailProductComponent},
  {path:"delete/:index",component:DeleteComponent},
  {path:"update/:index",component:UpdateComponent},
  {path:"create",component:CreatProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
