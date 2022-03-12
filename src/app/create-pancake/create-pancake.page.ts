import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyLocation, UserPhoto } from '../services/pancake.service';
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
           private photoService: PhotoService) { }

  ngOnInit() {
  }

  onAddPicture(){
    this.photoService.getNewPhoto();
  }

  onSaveLocation(){
    alert("Ask Location service"); 
  }

  onAddPancake(submittedForm: NgForm){
    if(submittedForm.valid){

      alert("Ask Pancake Service ");


      this.router.navigateByUrl("/home");
    }
  }

}
