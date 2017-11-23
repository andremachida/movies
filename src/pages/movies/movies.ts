import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { Movie } from '../../domain/movie/movie';

/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [
    MovieProvider
  ]
})
export class MoviesPage {

  public data;
  public movie: Movie;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    private toastCtrl: ToastController
  ) {
    this.data = {};
    this.movie = new Movie(null, null, null, null, null, null);
  }

  add(movie) {
    var data = JSON.stringify({
      original_title: this.movie.original_title,
      release_date: this.movie.release_date,
      overview: this.movie.overview,
      original_language: this.movie.original_language,
      vote_average: this.movie.vote_average,
      backdrop_path: this.movie.backdrop_path
    });

    this.movieProvider.addMovies(data);

    let toast = this.toastCtrl.create({
      message: 'Success',
      duration: 3000
    });
    toast.present();
  }

}
