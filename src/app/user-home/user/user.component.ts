import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {UserHomeService} from '../user-home.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {
    userId: 0,
    name: '',
    email: '',
    userName: '',
    phone: ''
  }
  constructor(private userService: UserHomeService) { }

  ngOnInit() {
  }

  postUser() {
    let userToBeAdded: User = {
      userId: this.user.userId,
      name: this.user.name,
      email: this.user.email,
      userName: this.user.userName,
      phone: this.user.phone
    };
    this.userService.postUserInformation(userToBeAdded).subscribe(data => {
      alert('Item added to the inventory');
        userToBeAdded = null;

      },
      error => alert('Something Went Wrong'));

  }

}
