import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  newUser = new User("","","",0,"",0,0,0,new Date());
  newRepo = new Repo("","","",0, new Date(), "");

  

  constructor() { }

  ngOnInit(): void {
  }

}
