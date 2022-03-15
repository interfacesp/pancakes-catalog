import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyLocation, PancakeService, UserPhoto } from '../services/pancake.service';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-create-pancake',
  templateUrl: './create-pancake.page.html',
  styleUrls: ['./create-pancake.page.scss'],
})
export class CreatePancakePage implements OnInit {

   myPhoto: UserPhoto; 
   myPosition: MyLocation;
   pancakeName: string; 
   pancakeDescription: string; 

 
  constructor(private router: Router, 
           private photoService: PhotoService,
           private pancakeService: PancakeService) { }

  ngOnInit() {
  }

  async onAddPicture(){
     const photo  = await this.photoService.getNewPhoto();
     this.myPhoto = {
       webViewPath: photo.webViewPath,
       filePath: photo.filePath
     }; 
      
    
  }

  onSaveLocation(){
    alert("Ask Location service"); 
  }

  onAddPancake(submittedForm: NgForm){
    if(submittedForm.valid){

      // this.pancakeService.addPancake(
      //    {
      //     //Todo
      //    }   

      // );

      this.router.navigateByUrl("/home");
    }
  }

}
