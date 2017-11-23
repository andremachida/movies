import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { DetailsPage } from '../details/details';
import { MoviesPage } from '../movies/movies';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public lista_filmes = new Array<any>();
  public page = 1;
  public infiniteScroll;
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider, public loadingCtrl: LoadingController) {
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.loadingMovies();
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.loadingMovies(true);
  }

  loadingMovies(newpage: boolean = false) {
    this.presentLoading();
    this.movieProvider.getMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        if(newpage) {
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno);
          this.infiniteScroll.complete();
        } else {
          this.lista_filmes = objeto_retorno;
        }
        
        this.closeLoading();

        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        console.log(error);
        this.closeLoading();

        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    )
  }

  abrirDetalhes(filme) {
    this.navCtrl.push(DetailsPage, { id: filme._id });
  }

  inserirFilme() { 
    this.navCtrl.push(MoviesPage);
  }

  ionViewDidEnter() {
    this.loadingMovies();
  }

}
