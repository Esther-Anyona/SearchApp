import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: 'home', component:NavigationComponent},
  { path: 'users', component:UserComponent},
  { path: 'repos', component:RepositoryComponent},
  { path: 'form', component:SearchFormComponent},
  { path: '**', component:NotFoundComponent},

  
  { path: '', redirectTo:"/form", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
