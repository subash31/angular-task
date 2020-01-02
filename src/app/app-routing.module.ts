import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateproductComponent } from './createproduct/createproduct.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },{
    path:'login',
    component:LoginComponent
  },
  {
    path : 'dashboard',
  component:DashboardComponent,
  children:[
    {
      path:'product',
      component:ProductComponent
    },
    {
      path:'customer',
      component:CustomerComponent
    }
  ]
},

{
  path:'createproduct',
  component:CreateproductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
