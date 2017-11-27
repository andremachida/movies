import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "http://localhost:3003/api/moviesService/";
  public http;
  private config = {
    headers:  {
      'Accept': 'application/json, */*',
      "Content-Type" : "application/json"
    }
  };

  constructor(http: Http) {
    this.http = http;
  }

  getMovies(page = 1) {
    return this.http.get(this.baseApiPath);
  }
  getMovieDetails(filmeid) {
    return this.http.get(this.baseApiPath + filmeid);
  }

  addMovies(data) {
    this.http.post(this.baseApiPath, data, this.config).subscribe();
  }

  deleteMovies(id) {
    this.http.delete(this.baseApiPath, id, this.config).subscribe();
  }
}
