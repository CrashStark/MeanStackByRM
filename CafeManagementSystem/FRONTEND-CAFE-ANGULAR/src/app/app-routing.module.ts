import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CategoryComponent } from './category/category.component';
import { AutheGuardGuard } from './authe-guard.guard';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProductsComponent } from './products/products.component';
import { BillsComponent } from './bills/bills.component';


const routes: Routes = [
  {
    path:'', component:LoginFormComponent
  },
  {
    path:'signUp', component:SignUpFormComponent
  },
  {
    path:'category', component:CategoryComponent, canActivate:[AutheGuardGuard]
  },{
    path:'profile', component:ProfilePageComponent
  },{
    path:'products',component:ProductsComponent
  },{
    path:'getbills',component:BillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
