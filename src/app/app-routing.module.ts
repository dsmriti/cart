import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { Route } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'product-category', component: ProductCategoryComponent },
  { path:'product-detail', component:  ProductDetailComponent },
  { path:'cart', component:  CartComponent }
];
  
@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
