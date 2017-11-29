import { Component, OnInit } from '@angular/core';
import { CinemaService, Movie } from '../cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Array<Movie>;

  constructor(private cinemaService: CinemaService) {
    this.movies = this.cinemaService.getMovies();
  }

  ngOnInit() {
  }

}
