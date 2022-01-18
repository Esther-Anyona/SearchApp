import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpSearchService } from '../http-search.service';
import { NgForm } from '@angular/forms';
import { Repo } from '../repo';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  @ViewChild('searchTerm') searchRepoForm!: NgForm;
  
  userRepos;
  searchText!: string;
  showRepos = false;
  repoNotFound = false;

  constructor(private searchService: HttpSearchService) {}

  ngOnInit(): void {}

  searchGithubUserRepositories() {
    this.searchText = this.searchRepoForm.value.search;
    this.searchService.getRepos(this.searchText).then(
      (response) => {
        this.userRepos = this.searchService.userRepos;
        this.showRepos = true;
      },
      (error) => {
        this.repoNotFound = true;
        console.log(error);
      }
    ); 
  }
}

