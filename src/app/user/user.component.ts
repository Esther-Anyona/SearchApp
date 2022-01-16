import { Component, OnInit } from '@angular/core';
import { HttpSearchService } from '../http-search.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  repo!: Repo;
  submitSearch(){

  }

  constructor( private userSearch:HttpSearchService ) {
  }

  ngOnInit(): void {
    this.userSearch.getUserProfile()
    this.user = this.userSearch.user
    console.log(this.user ) 
  }

}
