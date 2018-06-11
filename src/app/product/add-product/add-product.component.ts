import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Item} from '../Item';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  item: Item = {
    productId: 0,
    productName: '',
    price: 0
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  postItem() {
    let itemToBeAdded: Item = {
      productId: this.item.productId,
      productName: this.item.productName ,
      price: this.item.price
    };
    this.productService.postItemInformation(itemToBeAdded).subscribe(data =>{
        console.log(data)
        alert('Item added to the inventory');
        itemToBeAdded = null;

      },
      error => alert('Something Went Wrong'));

  }
}
