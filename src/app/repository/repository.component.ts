import { Component, OnInit } from '@angular/core';
import { HttpSearchService } from '../http-search.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repo!:Repo;

  constructor(private repoSearch:HttpSearchService) { }

  ngOnInit(): void {
    this.repoSearch.getRepoList()
    this.repo = this.repoSearch.repo
    console.log(this.repo )
  }

}
