import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';

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

  userArray: any[] = [];

  constructor(private _ActivatedRoute: ActivatedRoute, private _Router: Router) { }

  ngOnInit(): void {
  }

  addUser(newuser: user) {
    console.log(newuser);
    //add this array for test passing data to another component
    this.userArray.push(newuser);
    this.user = new user();
  }

}
