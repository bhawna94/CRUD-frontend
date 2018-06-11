import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productid: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  deleteUser() {
    let productid = this.productid;
    this.productService.deleteProductRecord(productid).subscribe(data =>{
        alert('user record has been deleted successfully');
      },
      error => alert('something went wrong!')
    );
  }

}
