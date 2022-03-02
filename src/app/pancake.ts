export interface Pancake {
    id: number; 
    name: string, 
    description: string,
    location: {
        longi: number, 
        lati: number
    }

}


export const pancakesCollection = [
    {
        id: 1,
        name: "crêpe sarrasin", 
        description: "une délicieuse crêpe faite à la main",
        location : { longi: 120, lati: 50}
    },

    {
        id: 2,
        name: "crêpe chocolat", 
        description: "Du chocolat",
        location: { longi: 120, lati: 50}
    },
   
    {
        id: 3,
        name: "crêpe sucre", 
        description: "Du sucre",
        location: { longi: 120, lati: 50}
    },
   
    

]; 