import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpSearchService {
url: string ="https://api.github.com/users/esther"
  user: User;
  repo: Repo;
 repoLink:string ="https://api.github.com/users/esther/repos" 

  constructor(private http:HttpClient) { 
    this.user = new User("","", "",0, "", 0, 0, 0, new Date());
    this.repo = new Repo("","","",0, new Date(), "");
  }

  getUserProfile(){
    interface ApiResponse{
      login: string;
      name: string;
      avatar_url: string;
      id: number;
      html_url: string;
      public_repos: number;
      followers: number,
      following: number,
      created_at: Date 
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(this.url).toPromise().then(response=>{
        this.user.login = response!.login
        this.user.name = response!.name
        this.user.avatar_url= response!.avatar_url
        this.user.id= response!.id
        this.user.html_url= response!.html_url
        this.user.public_repos=response!.public_repos

        resolve('')
      },
      error=>{
        this.user.login = "Jay"
        this.user.name = "Jay Griffins"

        reject(error)
      })
    })
    return promise
  }

  getRepoList(){
    interface ApiResult{
      name: string,
      html_url: string,
      description: string,
      forks: number,
      created_at: Date,
      languages_url: string,
    }

  let promise = new Promise((resolve,reject)=>{
    this.http.get<ApiResult>(this.repoLink).toPromise().then(response=>{
      this.repo.name = response!.name
      this.repo.html_url = response!.name
      this.repo.description= response!.description
      this.repo.forks= response!.forks
      this.repo.created_at= response!.created_at
      this.repo.languages_url=response!.languages_url

      resolve('')
    },
    error=>{
      this.repo.name = "Repository could not be found"

      reject(error)
    })
  })
  return promise
}


} 

//     let promise = new Promise ((resolve,reject)=>{
//        this.http.get<ApiResponse>(this.url).toPromise().then(result=>{
//         this.user.name!= result?.name
//         resolve(User)
//       },
//       err=>{
//         reject()
//       })
//     })
//     return promise
//   }

  
//     let promise = new Promise ((resolve,reject)=>{
//       this.http.get<ApiResult>(this.repoLink).toPromise().then(result=>{
//        this.user.name!= result?.name
//        resolve(User)
//      },
//      err=>{
//        reject()
//      })
//    })
//    return promise
//   }

  


// }
