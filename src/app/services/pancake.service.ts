import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import {  Platform } from '@ionic/angular';
import { PhotoService } from './photo.service';

@Injectable({
  providedIn: 'root'
})
export class PancakeService {

  
   public pancakesCatalog: Pancake[] ;
   private PANCAKES_STORAGE_KEY: string = "tiroir-pancakes";

  constructor(private platform: Platform,
               private photoService: PhotoService) {
  }


  public addPancake(newPancake: PancakeOptions){

    const myNewId = this.pancakesCatalog.length + 1; 
    const newCrepe = {
      id: myNewId,
      nom: newPancake.name, 
      description: newPancake.description,
      picture: newPancake.photo,
      location: newPancake.loc
    }

    this.pancakesCatalog.push(newCrepe);

    console.log(JSON.stringify(this.pancakesCatalog));

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
        
        //On essaie d'abord de lire le contenu de notre mémoire permanente (Storage)
        //Si ça ne fonctionne pas => on peut en profiter pour charger le tableau par défaut
        this.pancakesCatalog = JSON.parse(pancakesAsJson.value) || defaultPancakes.slice();

          //Plateforme autre que Appareil mobile => Appli dans navigateur Web
         if(!this.platform.is("hybrid")){

              for(let aPancake of this.pancakesCatalog){
                  //Si le chemin d'accès existe => on peut charger la photo
                  if(aPancake.picture && aPancake.picture.filePath){
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
  photo: UserPhoto,
  loc: MyLocation
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
          webViewPath: "https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-High-Quality-Image.png"
      }
  }
 
]; 
