import { Component } from '@angular/core';
import { Pancake,pancakesCollection } from '../Pancake';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  panCollection: Pancake [];

  constructor(private router: Router) {
    this.panCollection = pancakesCollection.slice();
  }


  onCreateNew(){
    this.router.navigateByUrl("/create");
  }

}
