import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { Route } from '@angular/compiler/src/core';
import { HomeComponent } from './component/home/home.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductCategoryComponent } from './component/product-category/product-category.component';
import { CartComponent } from './component/cart/cart.component';

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
