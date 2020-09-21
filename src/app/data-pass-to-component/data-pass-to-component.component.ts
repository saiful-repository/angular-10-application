import { Component, OnInit, Input } from '@angular/core';
import { user } from '../model/user';

@Component({
  selector: 'app-data-pass-to-component',
  templateUrl: './data-pass-to-component.component.html',
  styleUrls: ['./data-pass-to-component.component.scss']
})
export class DataPassToComponentComponent implements OnInit {

  @Input() childArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
