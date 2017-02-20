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

  toggleStore(image): void {
    image['active'] = !image['active'];
    let toggle = false;
    let store = this.searchService.store.filter((el) => {
      if (el.id == image.id) {
        this.searchService.removeFavoritesPhotosById(image.id);
        toggle = true;
      }
      return el.id != image.id;
    });
    if (toggle) {
      this.searchService.store = store;
    } else {
      this.searchService.store.push(image);
      this.searchService.addFavoritesPhotosById(image.id);
    }
  }
}
