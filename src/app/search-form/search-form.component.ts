import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() searchUser = new EventEmitter<User>();
  @Output() searchRepo = new EventEmitter<Repo>();


  newUser = new User("","", "", 0, "", 0, 0, 0, new Date());
  newRepo = new Repo("","","",0, new Date(), "");

  onSubmit(form: NgForm){
    var search=this.newUser;
    this.searchUser.emit(this.newUser);
    form.resetForm();
  }

  submitSearch(data){
    this.searchUser.emit(data.value.name);
    this.searchRepo.emit(this.newRepo);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
