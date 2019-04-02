export class FilmModel {
  /*
     name: string;
     lead: string;
     description: string;
     slug: string;
     images: string[];
     genre: string[];
     actors: string[];
     rate: number;
     duration: number;
     reviews: string[];
     fdate: number;  //film date
     cdate: number; //post create date
     udate: number; //post update date
     pdate: number; //post publish date
*/
    
    constructor(
      private name: string, 
      private lead: string,
      private description: string, 
      public slug: string,
      private images: string[], 
      private genre: string[], 
      private actors: string[],
      public rate: number,
      private duration: number, 
      private reviews: string[], 
      private fdate: number, 
      private cdate: number, 
      private udate: number, 
      private pdate: number
  ) {} 
}