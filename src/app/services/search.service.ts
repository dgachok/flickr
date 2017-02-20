import {Injectable} from '@angular/core';
import {API_KEY} from "../shared/global";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Images} from "../interfaces/images";

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  public gallery: Array<Images> = [];
  public store: Array<Images> = [];
  public spinner: boolean = false;

  getImages(query: string){
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=12&format=json&nojsoncallback=1`;
    return this.http.get(url).map(data => {
      this.gallery = data.json().photos.photo;
      this.spinner = false;
      return data;
    });
  }
}
