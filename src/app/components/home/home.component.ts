import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service"
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  template: `<h2 class="margin_bottom_10">Hello, {{authService.user.fullname || 'guest'}}!</h2>
<gallery [images]="searchService.gallery"></gallery>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private searchService: SearchService, private authService:AuthService) {
  }

  ngOnInit() {
  }

}
