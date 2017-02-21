import {Component, OnInit} from '@angular/core';
import {SearchService} from "./services/search.service";
import {API_KEY, API_SIG, getParamFromUrl} from "./shared/global";
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private AUTH_LINK: string = 'http://www.flickr.com/services/auth/?api_key=' + API_KEY + '&perms=write&api_sig=' + API_SIG;

  constructor(private searchService: SearchService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    if (getParamFromUrl('frob')) this.authService.getToken().subscribe(data => this.searchService.getFavoritesPhotos());
  }

  search(e, query) {
    if (e.keyCode >= 0 && e.keyCode !== 13 || !query) return;
    this.searchService.spinner = true;
    this.searchService.getImages(query).subscribe(data => this.router.navigate(['/home']));
  }
}
