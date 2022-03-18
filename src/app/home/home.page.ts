import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PancakeService, Pancake} from '../services/pancake.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  panCollection: Pancake[]; 

  constructor(private router: Router, 
            private pancakeService: PancakeService) {
  }

  ngOnInit() {
     this.loadPancakes(); 
  }

  async loadPancakes() {
    await this.pancakeService.loadSavedPancakes();
    this.panCollection= this.pancakeService.pancakesCatalog;
  }


  onCreateNew(){
    this.router.navigateByUrl("/create");
  }

}
