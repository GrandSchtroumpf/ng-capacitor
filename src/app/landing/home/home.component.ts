import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchForm = new FormGroup({
    what: new FormControl(''),
    where: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
