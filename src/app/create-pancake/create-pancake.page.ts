import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../services/location.service';
import { MyLocation, PancakeService, UserPhoto } from '../services/pancake.service';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-create-pancake',
  templateUrl: './create-pancake.page.html',
  styleUrls: ['./create-pancake.page.scss'],
})
export class CreatePancakePage implements OnInit {

   myPhoto: UserPhoto | undefined; 
   myPosition: MyLocation | undefined;

 
  constructor(private router: Router, 
           private photoService: PhotoService,
           private pancakeService: PancakeService,
           private locationService: LocationService) { }

  ngOnInit() {
  }

  async onAddPicture(){
     const photo  = await this.photoService.getNewPhoto();
     this.myPhoto = {
       webViewPath: photo.webViewPath,
       filePath: photo.filePath
     }; 
      
    
  }

  async onSaveLocation(){
      this.myPosition = await this.locationService.getMyLocation();
  }

  onAddPancake(submittedForm: NgForm){
    if(submittedForm.valid){

        this.pancakeService.addPancake({
          description: submittedForm.value.descr,
          name: submittedForm.value.leNom,
          photo: this.myPhoto,
          loc: this.myPosition
        });

        // submittedForm.resetForm()
        
      this.router.navigateByUrl("/home");
  
    }else {
       alert("Le nom et la description sont obligatoires!");
    }
  }

}
