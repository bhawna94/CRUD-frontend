import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { UserComponent } from './user-home/user/user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import {UserHomeService} from './user-home/user-home.service';
import { LegacyUserComponent } from './legacy-user/legacy-user.component';
import { ProductComponent } from './product/product.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DeleteUserComponent } from './user-home/delete-user/delete-user.component';
import { UpdateUserComponent } from './user-home/update-user/update-user.component';
import { DeleteLegUserComponent } from './legacy-user/delete-leg-user/delete-leg-user.component';
import { UpdateLegUserComponent } from './legacy-user/update-leg-user/update-leg-user.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AddLegUserComponent } from './legacy-user/add-leg-user/add-leg-user.component';
import { AddTransactionComponent } from './transaction/add-transaction/add-transaction.component';
import { DeleteTransactionComponent } from './transaction/delete-transaction/delete-transaction.component';
import { UpdateTransactionComponent } from './transaction/update-transaction/update-transaction.component';
import {ProductService} from './product/product.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserHomeComponent,
    LegacyUserComponent,
    ProductComponent,
    TransactionComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    DeleteLegUserComponent,
    UpdateLegUserComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    AddProductComponent,
    AddLegUserComponent,
    AddTransactionComponent,
    DeleteTransactionComponent,
    UpdateTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'user-home',
          component: UserHomeComponent,
          children: [
            {
              path: 'add-user',
              component: UserComponent
            },
            {
              path: 'delete-user',
              component: DeleteUserComponent
            },
            {
              path: 'update-user',
              component: UpdateUserComponent
            }
          ]
        },
        {
          path: 'product',
          component: ProductComponent,
          children: [
            {
              path: 'add-product',
              component: AddProductComponent
            },
            {
              path: 'delete-product',
              component: DeleteProductComponent
            },
            {
              path: 'update-product',
              component: UpdateProductComponent
            }
          ]
        }
        ]
    )
  ],
  providers: [UserHomeService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
