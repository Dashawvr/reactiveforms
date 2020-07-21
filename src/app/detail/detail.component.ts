import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Movie, MovieDetail} from '../models/Movie';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movieDetils: Observable<MovieDetail>;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieDetils = this.route.queryParams.pipe(
      map(queryParams => queryParams.movieId),
      switchMap(imdbId => this.dataService.getMovieDetails(imdbId)),
      switchMap((movie: MovieDetail) =>
        this.dataService.searchMovie(movie.Title).pipe(
          map((similarMovies: Array<Movie>) =>
            similarMovies.filter(
              (similarMovie: Movie) => similarMovie.Title !== movie.Title
            )
          ),
          map((similarMovies: Array<Movie>) => ({
            ...movie,
            similarMovies
          }))
        )
      )
    );
  }

}
