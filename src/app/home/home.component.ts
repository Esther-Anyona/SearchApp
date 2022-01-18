import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpSearchService } from '../http-search.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData!: User;
  userRepos;
  constructor(private searchService: HttpSearchService) {}

  ngOnInit(): void {
    this.getUserData('Esther-Anyona');
    this.getUserRepos('Esther-Anyona');
  }

 
  getUserData(username) {
    this.searchService.getUserRequest(username).then(
      (response) => {
        this.userData = this.searchService.userData;
      },
      (error) => {
        console.log(error);
      }
    ); 
  }


  getUserRepos(username) {
    this.searchService.getRepos(username).then(
      (response) => {
        this.userRepos = this.searchService.userRepos;
        console.log(this.userRepos);
      },
      (error) => {
        console.log(error);
      }
    ); 
  }
}
 