import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  item: Item = {
    productId: 0,
    productName: '',
    price: 0
  }
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  updateItem() {
    let itemToBeAdded: Item = {
      productId: this.item.productId,
      productName: this.item.productName ,
      price: this.item.price
    };
    this.productService.updateItemInformation(itemToBeAdded).subscribe(data => {
        alert('Item added to the inventory');
        itemToBeAdded = null;

      },
      error => alert('Something Went Wrong'));

  }
}
