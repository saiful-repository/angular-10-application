import { Component, OnInit } from '@angular/core';
import { employee } from '../model/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-control-with-regular-form',
  templateUrl: './dynamic-form-control-with-regular-form.component.html',
  styleUrls: ['./dynamic-form-control-with-regular-form.component.scss']
})
export class DynamicFormControlWithRegularFormComponent implements OnInit {

  employee = new employee();
  dataarray: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dataarray.push(this.employee);
  }

  submitForm(myform: NgForm) {    
    if (myform.valid) {
      console.log(this.dataarray);
    }
  }

  addForm() {
    this.employee = new employee();
    this.dataarray.push(this.employee);
  }

  deleteForm(index) {
    this.dataarray.splice(index);
  }

}
