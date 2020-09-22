import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder, FormControl } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  myformGroup: FormGroup;
  counter: number
  expCounter:number

  constructor(private fb:FormBuilder) {
    this.myformGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      lastName: ['', Validators.required],
      address: this.fb.group({
        address1: ['', Validators.required],
        address2:[''],
        city: [''],
        zip: ['']
      }),
      mobiles: this.fb.array([
        this.mobileArrayContent()
      ]),
      experience: this.fb.array([
        this.experienceArrayContent()
      ])
    });
  }

  ngOnInit(): void {
    
  }

  mobileArrayContent(): FormControl {
    return this.fb.control('', Validators.required)
  }

  experienceArrayContent(): FormGroup {
    return this.fb.group({
      company: ['', Validators.required],
      jobTitle: ['', Validators.required],
      salary: ['']
    })
  }

  get mobiles() {
    return this.myformGroup.get("mobiles") as FormArray
  }

  get experience() {
    return this.myformGroup.get("experience") as FormArray
  }
  addmobiles() {
    this.mobiles.push(
      this.mobileArrayContent()
    )
  }

  addexperience() {
    this.experience.push(
      this.experienceArrayContent()
    )
  }

  submitForm(newFormGroup: FormGroup) {
    newFormGroup.markAllAsTouched();
    if (newFormGroup.valid) {
      console.log("FormJSON:" + JSON.stringify(newFormGroup.value));
      console.log("FirstName:" + newFormGroup.get("firstName").value);
      console.log("LastName:" + newFormGroup.get("lastName").value);
      console.log("address1:" + newFormGroup.get(['address', 'address1']).value);
      console.log("address2:" + newFormGroup.get(['address', 'address2']).value);
      console.log("city:" + newFormGroup.get(['address', 'city']).value);
      console.log("zip:" + newFormGroup.get(['address', 'zip']).value);
      this.counter = 0
      this.expCounter = 0

      for (let mob of this.mobiles.controls) {
        console.log(this.myformGroup.get(['mobiles', this.counter]).value)
        this.counter = this.counter + 1
      }

      for (let exp of this.experience.controls) {
        console.log(this.myformGroup.get(['experience', this.expCounter]).get("company").value)
        console.log(this.myformGroup.get(['experience', this.expCounter]).get("jobTitle").value)
        console.log(this.myformGroup.get(['experience', this.expCounter]).get("salary").value)
        this.expCounter = this.expCounter + 1
      }
    }    
  }
}
