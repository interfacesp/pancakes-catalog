import { Component, OnInit } from '@angular/core';
import { Pancake, pancakesCollection } from '../Pancake';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pancake',
  templateUrl: './pancake.page.html',
  styleUrls: ['./pancake.page.scss'],
})
export class PancakePage implements OnInit {

  currentPancake: Pancake | undefined; 
  pancakes: Pancake[] | undefined; 
  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {

    //Get pancake Id from the route
    const routeParams = this.activatedRoute.snapshot.paramMap; 
    const pancakeId= Number(routeParams.get("pancakeId"));

    //Find pancake with current Id
    this.currentPancake = pancakesCollection.find( uneCrepe => uneCrepe.id === pancakeId);

  }

  onBackHome(){
    this.router.navigateByUrl("/home");      
  }

}
