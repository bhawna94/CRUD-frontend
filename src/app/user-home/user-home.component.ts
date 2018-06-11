import { Component, OnInit } from '@angular/core';
import {User} from './User';
import {UserHomeService} from './user-home.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  user: User = {
    userId: 0,
    name: '',
    email: '',
    userName: '',
    phone: ''
  }
  constructor() { }

  ngOnInit() {
  }
}
