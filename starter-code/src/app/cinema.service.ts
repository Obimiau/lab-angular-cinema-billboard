import { Injectable } from '@angular/core';
import { movies } from './sample-movies';

export interface Movie {
  id: Number;
  title: String;
  poster: String;
  synopsis: String;
  genres: Array<String>;
  year: Number;
  director: String;
  actors: Array<String>;
  hours?: Array<String>;
  room?: Number;
}

@Injectable()
export class CinemaService {
  private movies: Array<Movie>;

  constructor() {
    this.movies = movies;
  }

  getMovies() {
    return this.movies;
  }

  getMovieById(id) {
    return this.movies.find((movie) => movie.id === id);
  }

}
