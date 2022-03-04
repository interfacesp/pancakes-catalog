import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pancake, pancakesCollection} from '../Pancake';
@Component({
  selector: 'app-pancake-details',
  templateUrl: './pancake-details.component.html',
  styleUrls: ['./pancake-details.component.scss'],
})
export class PancakeDetailsComponent implements OnInit {

  currentPancake: Pancake | undefined; 

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      //Get pancake Id from the route
      const routeParams = this.activatedRoute.snapshot.paramMap; 
      const pancakeId= Number(routeParams.get("pancakeId"));

      //Find pancake with current Id
      this.currentPancake = pancakesCollection.find( uneCrepe => uneCrepe.id === pancakeId);

      console.log("Crepe courante (id): " + this.currentPancake.id);
      console.log("Crepe courante (description): " + this.currentPancake.description);
      console.log("Crepe courante (name): " + this.currentPancake.name);
    }

}
