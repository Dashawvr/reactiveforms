import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './favorite/about.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import {StringPipe} from './utils/string.pipe';
import {CustomPipe} from './utils/custom.pipe';
import {ImagePipe} from './utils/image.pipe';
import { ThemeComponent } from './theme/theme.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'movie-search', component: SearchComponent},
  {path: 'movie-detail', component: DetailComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent,
    CardComponent,
    DetailComponent,
    StringPipe,
    CustomPipe,
    ImagePipe,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
