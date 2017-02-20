import {Component, OnInit, Input} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-store',
  template: `<h2 class="margin_bottom_10">Gallery</h2>
<gallery [images]="searchService.store"></gallery>`,
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

}
