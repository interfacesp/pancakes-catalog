import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Pancake, pancakesCollection} from '../Pancake';
@Component({
  selector: 'app-pancake-details',
  templateUrl: './pancake-details.component.html',
  styleUrls: ['./pancake-details.component.scss'],
})
export class PancakeDetailsComponent implements OnInit {

  currentPancake: Pancake | undefined; 

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

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
