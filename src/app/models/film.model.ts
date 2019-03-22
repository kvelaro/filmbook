export class FilmModel {
    public name: string;
    public description: string;
    public images: string[];
    public genre: string;
    public year: number;  
    public actors: string;
    public rate: number;
    public reviews: string[];
    private cdate: number;
    private udate: number;
    private pdate: number;
}