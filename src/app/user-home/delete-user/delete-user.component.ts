import { Component, OnInit } from '@angular/core';
import {UserHomeService} from '../user-home.service';
import {User} from '../User';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  userid: any;
  constructor(private userService: UserHomeService) { }

  ngOnInit() {
  }
  deleteUser() {
    let userid = this.userid;
    this.userService.deleteUserRecord(userid).subscribe(data =>{
      alert('user record has been deleted successfully');
    },
      error => alert('something went wrong!')
      );
  }

}
