import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ThemeComponent } from './theme/theme.component';

import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {StringPipe} from './utils/string.pipe';
import {CustomPipe} from './utils/custom.pipe';
import {ImagePipe} from './utils/image.pipe';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'favorite', component: FavoriteComponent},
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
    ContactComponent,
    SearchComponent,
    CardComponent,
    DetailComponent,
    StringPipe,
    CustomPipe,
    ImagePipe,
    ThemeComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
