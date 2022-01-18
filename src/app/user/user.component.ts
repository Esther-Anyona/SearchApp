import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpSearchService } from '../http-search.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userDetails;
  userRepos;
  searchText!: string;
  showUserDetails = false;
  userNotFound = false;

 
  @ViewChild('searchTerm') searchForm!: NgForm;

  constructor(private searchService: HttpSearchService) {}

  ngOnInit(): void {}

  
  getUserProfile() {
    this.searchText = this.searchForm.value.search;
    this.searchService.getUser(this.searchText).then(
      (response) => {
          this.userDetails = this.searchService.userData;
          this.showUserDetails = true;
      },
      (error) => {
        console.log(error);
        this.userNotFound = true;
      }
    );

  }
}


