export class Serie {
    id: number;
    name: string;
    chanel: string;
    seasons: number;
    description: string;
    link: string;
    imageURL: string

    constructor(id: number, name: string, chanel: string, seasons: number, description: string, link: string, imageURL: string) {
        this.id = id;
        this.name = name;
        this.chanel = chanel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.imageURL = imageURL;
    }
}