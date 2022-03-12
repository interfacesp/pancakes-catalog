import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PancakeService {

   pancakesCatalog: Pancake[]; 

  constructor() { 
    this.pancakesCatalog = defaultPancakes; 
  }


  public getPancakes(){
    return this.pancakesCatalog;
  }


}


export interface Pancake {
  id: number; 
  name: string, 
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


export const defaultPancakes = [
  {
      id: 1,
      name: "crêpe Sarrasin", 
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
      name: "crêpe au Chocolat", 
      description: " La crêpe est un mets composé d'une couche plus ou moins fine de pâte" 
                  + "faite à base de farine (principalement) de blé ou de sarrasin)" 
                  + "et d'œufs agglomérés à un liquide (lait, parfois mélangé à de l'eau ou de la bière)."
                  + "Elle est généralement de forme ronde. Source: Wikipedia",
      location: {},
      picture : {
          filePath: "https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-High-Quality-Image.png",
          webViewPath: "https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-High-Quality-Image.png"
      }
  },
 
  {
      id: 3,
      name: "Crêpe au Sucre", 
      description: " La crêpe est un mets composé d'une couche plus ou moins fine de pâte" 
                  + "faite à base de farine (principalement) de blé ou de sarrasin)" 
                  + "et d'œufs agglomérés à un liquide (lait, parfois mélangé à de l'eau ou de la bière)."
                  + "Elle est généralement de forme ronde. Source: Wikipedia",
      location: { longi: 120, lati: 50},
      picture : {
          filePath: "https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-High-Quality-Image.png",
          webViewPath: "https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-High-Quality-Image.png"
      }
  },

  {
      id: 4,
      name: "Mikado", 
      description: " La crêpe est un mets composé d'une couche plus ou moins fine de pâte" 
                  + "faite à base de farine (principalement) de blé ou de sarrasin)" 
                  + "et d'œufs agglomérés à un liquide (lait, parfois mélangé à de l'eau ou de la bière)."
                  + "Elle est généralement de forme ronde. Source: Wikipedia",
      location: { longi: 120, lati: 50},
      picture : {
          filePath: "https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-High-Quality-Image.png",
          webViewPath: "https://www.pngall.com/wp-content/uploads/5/Pancake-PNG-High-Quality-Image.png"
      }
  },
 
  

]; 
