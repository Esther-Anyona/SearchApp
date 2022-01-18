import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpSearchService {
  header ={
    headers: new HttpHeaders()
    .set('Authorization', `Bearer ${environment.apiKey}`)
  }
  userData: User;
  userRepos: Repo;
  userUrl="https://api.github.com/users"
  repoUrl="https://api.github.com/users/Esther-Anyona/repos"

  constructor(private http: HttpClient) {
    this.userData = new User("","", "","", "", "", 0, 0, 0, new Date());
    this.userRepos = new Repo("","","",0, new Date(), "");
  }

  
  getUser(searchText) {
    interface ApiUserResponse {
      login: string;
      name: string;
      bio: string;
      avatar_url: string;
      location: string;
      html_url: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;
    }
   
    let promise = new Promise<void>((resolve, reject) =>
      this.http
        .get<ApiUserResponse>(`https://api.github.com/users/${searchText}`, this.header)
        .toPromise()
        .then(
          (response) => {
            this.userData = response!;
            resolve();
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        )
    );
    return promise;
  }
  
  getRepos(searchText) {
    interface ApiRepoResponse {
      name: string;
      html_url: string;
      description: string;
      forks: number;
      created_at: Date;
      language: string;
    }
   
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiRepoResponse>(`https://api.github.com/users/${searchText}/repos`, this.header)
        .toPromise()
        .then(
          (response) => {
           this.userRepos = response!;
           
            resolve();
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        );
    });
    return promise;
  }
}


  










