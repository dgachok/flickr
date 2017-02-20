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
    token: ''
  };

  getToken(frob, sign) {
    let url = `https://api.flickr.com/services/rest/?method=flickr.auth.getToken&api_key=${API_KEY}&frob=${frob}&api_sig=${sign}`;
    return this.http.get(url).subscribe(data => {
      console.log(data, 'data');
      return data;
    });
  }
}
