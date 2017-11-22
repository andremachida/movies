import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [
    MovieProvider
  ]
})
export class DetailsPage {

  public filme;
  public filmeid;
  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider: MovieProvider) {
  }

  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.filmeid).subscribe(
      data => {
        let retorno = (data as any)._body;
        this.filme = JSON.parse(retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
