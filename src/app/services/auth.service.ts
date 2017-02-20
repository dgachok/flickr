import {Injectable} from '@angular/core';
import {API_KEY} from "../shared/global";
import {Http} from "@angular/http";
import {User} from "../interfaces/user";

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  public user: User = <User>{
    api: API_KEY,
    getToken(){
      return localStorage.getItem('token');
    }
  };

  getToken(frob, sign) {
    let url = `https://api.flickr.com/services/rest/?method=flickr.auth.getToken&api_key=${API_KEY}&frob=${frob}&api_sig=${sign}&format=json&nojsoncallback=1`;
    return this.http.get(url).subscribe(data => {
      localStorage.setItem('token', data.json().auth['token']['_content']);
      this.user = Object.assign(this.user, data.json().auth['user']);
      return data;
    });
  }
}
