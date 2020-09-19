import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: user = {
    name: null,
    email: '',
    password: null,
    confirmPassword:null
  };
  constructor() { }

  ngOnInit(): void {
  }

  addUser(newuser: user) {
    console.log(newuser);
  }

}
