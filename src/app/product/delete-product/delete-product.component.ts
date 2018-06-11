import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  product_Id: any;
  constructor(private productService: ProductService ) { }

  ngOnInit() {
  }

  deleteProduct() {
    let productId = this.product_Id;
    this.productService.deleteProductRecord(productId).subscribe(data =>{
        alert('user record has been deleted successfully');
      },
      error => alert('something went wrong!')
    );
  }

}
