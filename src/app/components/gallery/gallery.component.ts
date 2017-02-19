import {Component, OnInit, Input} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {Images} from "../../interfaces/images";

@Component({
  selector: 'gallery',
  templateUrl: `./gallery.component.html`,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private searchService: SearchService) {
  }

  @Input() images: Array<Images> = [];

  ngOnInit() {
  }

  toggleStore(image) {
    let toggle = false;
    let store = this.searchService.store.filter((el) => {
      if (el.id == image.id) toggle = true;
      return el.id != image.id;
    });
    (toggle) ? this.searchService.store = store : this.searchService.store.push(image);
  }
}
