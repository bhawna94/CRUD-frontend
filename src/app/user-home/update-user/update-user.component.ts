import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {UserHomeService} from '../user-home.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

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
  updateUser() {
    let userToBeAdded: User = {
      userId: this.user.userId,
      name: this.user.name,
      email: this.user.email,
      userName: this.user.userName,
      phone: this.user.phone
    };
    this.userService.updateUserInformation(userToBeAdded).subscribe(data => {
        alert('Item added to the inventory');
        userToBeAdded = null;

      },
      error => alert('Something Went Wrong'));

  }

}
