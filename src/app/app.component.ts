import {Component} from '@angular/core';
import {SearchService} from "./services/search.service";
import {API_KEY, API_SIG} from "./shared/global";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private AUTH_LINK = 'http://www.flickr.com/services/auth/?api_key='+ API_KEY + '&perms=write&api_sig='+ API_SIG;

  constructor(private searchService: SearchService, private router: Router) {
  }

  search(e, query) {
    if (e.keyCode >= 0 && e.keyCode !== 13 || !query) return;
    this.searchService.getImages(query).subscribe(data => this.router.navigate(['/home']));
  }
}
