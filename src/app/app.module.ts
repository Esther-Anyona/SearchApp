import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpSearchService } from './http-search.service';
import { HighlightDirective } from './highlight.directive';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositoryComponent,
    NotFoundComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    HighlightDirective,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
  ],


  providers: [HttpSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
