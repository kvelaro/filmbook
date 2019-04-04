export class GenreModel {
    /*
    name: string;
    slug: string;
    cdate: number; //post create date
    udate: number; //post update date
    pdate: number; //post publish date
    */

    constructor(
        private name: string, 
        private slug: string,
        private popularity: number, 
        private cdate: number,
        private udate: number,
        private pdate: number
        ) {

    }
}