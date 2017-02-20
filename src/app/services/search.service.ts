import {Injectable} from '@angular/core';
import {API_KEY, API_SECRET} from "../shared/global";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Images} from "../interfaces/images";
import {Md5} from "ts-md5/dist/md5";
import {AuthService} from "./auth.service";

@Injectable()
export class SearchService {

  constructor(private http: Http, private authService: AuthService) {
  }

  public gallery: Array<Images> = [];
  public store: Array<Images> = [];
  public spinner: boolean = false;

  getImages(query: string) {
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=12&format=json&nojsoncallback=1`;
    return this.http.get(url).map(data => {
      this.gallery = data.json().photos.photo;
      this.spinner = false;
      return data;
    });
  }

  getFavoritesPhotos() {
    let sign = Md5.hashStr(API_SECRET + 'api_key' + API_KEY + 'auth_token' + this.authService.user.token() + 'formatjson' + 'methodflickr.favorites.getList' + 'nojsoncallback1' + 'user_id' + this.authService.user.nsid);
    let url = `https://api.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=${API_KEY}&api_sig=${sign}&user_id=${this.authService.user.nsid}&auth_token=${this.authService.user.token()}&format=json&nojsoncallback=1`;
    return this.http.get(url).subscribe(data => {
      this.store = Object.assign(this.store, data.json().photos['photo']);
      return data;
    });
  }

  addFavoritesPhotosById(id: string) {
    let sign = Md5.hashStr(API_SECRET + 'api_key' + API_KEY + 'auth_token' + this.authService.user.token() + 'formatjson' + 'methodflickr.favorites.add' + 'nojsoncallback1' + 'photo_id' + id);
    let url = `https://api.flickr.com/services/rest/?method=flickr.favorites.add&api_key=${API_KEY}&api_sig=${sign}&photo_id=${id}&auth_token=${this.authService.user.token()}&format=json&nojsoncallback=1`;
    return this.http.post(url, '').subscribe(data => data);
  }

  removeFavoritesPhotosById(id: string) {
    let sign = Md5.hashStr(API_SECRET + 'api_key' + API_KEY + 'auth_token' + this.authService.user.token() + 'formatjson' + 'methodflickr.favorites.remove' + 'nojsoncallback1' + 'photo_id' + id);
    let url = `https://api.flickr.com/services/rest/?method=flickr.favorites.remove&api_key=${API_KEY}&api_sig=${sign}&photo_id=${id}&auth_token=${this.authService.user.token()}&format=json&nojsoncallback=1`;
    return this.http.post(url, '').subscribe(data => data);
  }
}
