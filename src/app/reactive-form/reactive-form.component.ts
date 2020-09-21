import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  myformGroup: FormGroup;
  counter:number

  constructor() {
    this.myformGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormGroup({
        address1: new FormControl('', Validators.required),
        address2:new FormControl(''),
        city: new FormControl(''),
        zip: new FormControl('')
      }),
      mobiles: new FormArray([
        new FormControl('')
      ])
    });
  }

  ngOnInit(): void {
    
  }

  get mobiles() {
    return this.myformGroup.get("mobiles") as FormArray
  }
  addmobiles() {
    this.mobiles.push(
      new FormControl('')
    )
  }
  submitForm(newFormGroup:FormGroup) {
    console.log("FirstName:" + newFormGroup.get("firstName").value);
    console.log("LastName:" + newFormGroup.get("lastName").value);
    console.log("address1:" + newFormGroup.get(['address', 'address1']).value);
    this.counter = 0
    for (let mob of this.mobiles.controls) {
      console.log(this.myformGroup.get(['mobiles', this.counter]).value)      
      this.counter=this.counter+1
    }
    
  }
}
