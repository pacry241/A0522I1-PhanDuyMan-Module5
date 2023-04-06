import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoHangListComponent} from './component/lohang/lo-hang-list/lo-hang-list.component';
import {LoHangCreateComponent} from './component/lohang/lo-hang-create/lo-hang-create.component';


const routes: Routes = [
  // {
  //   path:"", component: HomeComponent
  // },
  {
    path: 'list', component: LoHangListComponent
  },
  {
    path: 'create', component: LoHangCreateComponent
  },
  // {
  //   path: "edit/:id",component: VeXeEditComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
