import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import {  Platform } from '@ionic/angular';
import { PhotoService } from './photo.service';

@Injectable({
  providedIn: 'root'
})
export class PancakeService {

  
   public pancakesCatalog: Pancake[] = []; 
   private PANCAKES_STORAGE_KEY: string = "pancakes";

  constructor(private platform: Platform,
               private photoService: PhotoService) {

        this.pancakesCatalog = defaultPancakes.slice();         
  }


  public addPancake(newPancake: PancakeOptions){

    const myNewId = this.pancakesCatalog.length + 1; 
    const newCrepe = {
      id: myNewId,
      nom: newPancake.name, 
      description: newPancake.description,
      picture: newPancake.photo
    }

    this.pancakesCatalog.push(newCrepe);


    Storage.set(
      {
        key: this.PANCAKES_STORAGE_KEY,
        value: JSON.stringify(this.pancakesCatalog)
      }
    );

  }

  public async loadSavedPancakes(){
        // console.log("loading...");

        const pancakesAsJson = await Storage.get(
          {
            key: this.PANCAKES_STORAGE_KEY
          }
        );

        this.pancakesCatalog = JSON.parse(pancakesAsJson.value) || [];

          //Plateforme autre que Appareil mobile => Appli dans navigateur Web
         if(!this.platform.is("hybrid")){

              for(let aPancake of this.pancakesCatalog){
                  
                  if(aPancake.picture){
                      const picFilePath= aPancake.picture.filePath;

                      // console.log("pancakeService - picture file path: " +picFilePath);
                      const fileData = await this.photoService.readPhotoDataBase64(picFilePath);
                     
                    //  console.log("found data: " + fileData);
                     
                      aPancake.picture.webViewPath = fileData;
                  }

              }
         }
  }




}


export interface Pancake {
  id: number; 
  nom: string, 
  description: string,
  location?: MyLocation,
  picture?: UserPhoto

}

export interface UserPhoto {
  filePath?: string ,
  webViewPath?: string
}

export interface MyLocation {
  longi?: number, 
  lati?: number
}

export interface PancakeOptions {
  description: string, 
  name: string, 
  photo: UserPhoto
}


export const defaultPancakes = [
  {
      id: 1,
      nom: "crêpe Sarrasin", 
      description: " La crêpe est un mets composé d'une couche plus ou moins fine de pâte" 
                  + "faite à base de farine (principalement) de blé ou de sarrasin)" 
                  + "et d'œufs agglomérés à un liquide (lait, parfois mélangé à de l'eau ou de la bière)."
                  + "Elle est généralement de forme ronde. Source: Wikipedia",

      location : { longi: 120, lati: 50},
      picture : {
          filePath: "https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-High-Quality-Image.png",
          webViewPath: "https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-High-Quality-Image.png"
      }
  },

  {
      id: 2,
      nom: "crêpe au Chocolat", 
      description: " La crêpe est un mets composé d'une couche plus ou moins fine de pâte" 
                  + "faite à base de farine (principalement) de blé ou de sarrasin)" 
                  + "et d'œufs agglomérés à un liquide (lait, parfois mélangé à de l'eau ou de la bière)."
                  + "Elle est généralement de forme ronde. Source: Wikipedia",
      location: {},
      picture : {
          filePath: "https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-High-Quality-Image.png",
          webViewPath: "https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-High-Quality-Image.png"
      }
  }
 
]; 
