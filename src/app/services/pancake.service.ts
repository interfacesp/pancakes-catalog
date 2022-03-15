import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PancakeService {

   pancakesCatalog: Pancake[]; 

  constructor() { 
    this.pancakesCatalog = defaultPancakes.slice(); 
  }


  public getPancakes(){
    return this.pancakesCatalog;
  }

  public addPancake(newPancake: PancakeOptions){
    const lastId = this.pancakesCatalog.length + 1; 
    this.pancakesCatalog.unshift(
        {
          id: lastId,
          nom: newPancake.name, 
          description: newPancake.description,
          picture: newPancake.photo
        }
    );
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
