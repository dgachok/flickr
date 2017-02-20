import {Injectable} from '@angular/core';
import {API_KEY, API_SECRET} from "../shared/global";
import {Http} from "@angular/http";
import {User} from "../interfaces/user";
import {Md5} from "ts-md5/dist/md5";

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  public user: User = <User>{
    api: API_KEY,
    token(): string{
      return localStorage.getItem('token') || '';
    }
  };

  getToken() {
    let sign = Md5.hashStr(API_SECRET + 'api_key' + API_KEY + 'formatjson' + 'frob' + this.user.frob + 'methodflickr.auth.getToken' + 'nojsoncallback1');
    let url = `https://api.flickr.com/services/rest/?method=flickr.auth.getToken&api_key=${API_KEY}&frob=${this.user.frob}&api_sig=${sign}&format=json&nojsoncallback=1`;
    return this.http.get(url).map(data => {
      localStorage.setItem('token', data.json().auth['token']['_content']);
      this.user = Object.assign(this.user, data.json().auth['user']);
      return data;
    });
  }
}
