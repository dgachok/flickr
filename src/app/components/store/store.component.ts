import {Component, OnInit, Input} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-store',
  template: `<h1>store works!</h1>
<gallery [images]="searchService.store"></gallery>`,
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private searchService : SearchService) { }

  ngOnInit() {
  }

}
