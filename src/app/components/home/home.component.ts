import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service"

@Component({
  selector: 'app-home',
  template: `<h2 class="margin_bottom_10">Hello, guest!</h2>
<gallery [images]="searchService.gallery"></gallery>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private searchService : SearchService) { }

  ngOnInit() {}


}
