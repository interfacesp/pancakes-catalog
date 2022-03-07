import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-pancake',
  templateUrl: './create-pancake.page.html',
  styleUrls: ['./create-pancake.page.scss'],
})
export class CreatePancakePage implements OnInit {

 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddPicture(){
    alert("Ask photo Service"); 
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
