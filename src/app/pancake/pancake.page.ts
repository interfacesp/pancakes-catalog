import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pancake, PancakeService } from '../services/pancake.service';

@Component({
  selector: 'app-pancake',
  templateUrl: './pancake.page.html',
  styleUrls: ['./pancake.page.scss'],
})
export class PancakePage implements OnInit {

  currentPancake: Pancake | undefined; 
  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private pancakeService: PancakeService) { }

  ngOnInit() {

    //Get pancake Id from the route
    const routeParams = this.activatedRoute.snapshot.paramMap; 
    const pancakeId= Number(routeParams.get("pancakeId"));

    //Find pancake with current Id
    this.currentPancake = this.pancakeService.pancakesCatalog.find( uneCrepe => uneCrepe.id === pancakeId);

    console.log("current pancake: "+ JSON.stringify(this.currentPancake));
  }

  onBackHome(){
    this.router.navigateByUrl("/home");      
  }
  
  openMapsLink(){
    const myLongi = this.currentPancake.location.longi; 
    const myLati = this.currentPancake.location.lati;
    const defaultZoom = 17;
    const link = "https://google.com/maps/@"+ myLati +','+ myLongi +','+defaultZoom;
    window.open(link);
  }

}
