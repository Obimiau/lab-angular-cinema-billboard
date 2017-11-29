import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, CinemaService } from '../cinema.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movie: Movie;
  constructor(private route: ActivatedRoute, private cnService: CinemaService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
     const movieId = Number(params['movieId']);
     this.movie = this.cnService.getMovieById(movieId);
    });
  }

}
