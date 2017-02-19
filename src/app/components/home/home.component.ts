import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service"

@Component({
  selector: 'app-home',
  template: `<h1> home works! </h1>
<gallery [images]="searchService.gallery"></gallery>
<spinner></spinner>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private searchService : SearchService) { }

  ngOnInit() {}


}
