import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/product';
//import { FetchdataService } from '../../service/fetchdata.service';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
  
})
export class ProductCategoryComponent implements OnInit {
  selectedCities: string[] = [];
  public items: Product[];
  constructor(public productService: ProductService) { }

  ngOnInit() {
    //console.log(this.fetchDataService.getConfig());
    //this.fetchDataService.getData().subscribe(a=> this.myarr = a);
    //console.log("Data"+ this.a);
    //this.fetch();
    //.subscribe(data => this.config = data );
    this.productService
      .display()
      .subscribe((data: Product[]) => {
      this.items = data;
      console.log(this.items);
    });
  }
  // fetch(): void {
  //   this.fetchDataService.getData()
  //       .subscribe(data1 => this.myarr = data1)
  //       console.log(this.myarr);
  // }
 
}
