import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = "saiful";
  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let MyClass = {
      active: this.clickCounter > 4,
      noactive:this.clickCounter<4

    }
    return MyClass;
  }
}
