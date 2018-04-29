import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from '../products/products.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  { path:'', pathMatch:'full', component:ProductsComponent },
  { path:'products', component:ProductsComponent },
  { path:'contact', component:ContactComponent },
  { path:'**', component: ProductsComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
