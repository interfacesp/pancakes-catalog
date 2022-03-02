import { Component } from '@angular/core';
import { Pancake,pancakesCollection } from '../Pancake';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  panCollection: Pancake [];

  constructor() {
    this.panCollection = pancakesCollection.slice();
  }

}
