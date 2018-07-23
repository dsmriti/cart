import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  selectedCities: string[] = [];
  public items: Product[];

  constructor(public productService: ProductService,) { }

  ngOnInit() {
    this.productService
      .display()
      .subscribe((data: Product[]) => {
      this.items = data;
      console.log(this.items);
    });
  }
}
