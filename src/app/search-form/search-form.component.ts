import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() addUser = new EventEmitter<User>();
  @Output() addRepo = new EventEmitter<Repo>();


  newUser = new User("","","",0,"",0,0,0,new Date());
  newRepo = new Repo("","","",0, new Date(), "");

  submitSearch(){
    this.addUser.emit(this.newUser);
    this.addRepo.emit(this.newRepo);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
