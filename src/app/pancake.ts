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

export const pancakesCollection = [
    {
        id: 1,
        name: "crêpe sarrasin", 
        description: "une délicieuse crêpe faite à la main",
        location : { longi: 120, lati: 50},
        picture : {}
    },

    {
        id: 2,
        name: "crêpe chocolat", 
        description: "Du chocolat",
        location: {},
        picture : {}
    },
   
    {
        id: 3,
        name: "crêpe sucre", 
        description: "Du sucre",
        location: { longi: 120, lati: 50},
        picture : {}
    },
   
    

]; 