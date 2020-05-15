import {IShow} from './show.model';

export class Show implements IShow {
  public id?: string;
  public url?: string;
  public name?: string;
  public language?: string;
  public genres?: string[];
  public rating?: { average: string };
  public image?: { medium: string, original: string}

  constructor( id: string,
               url: string,
               name: string,
               language: string,
               genres: string[],
               rating: { average: string },
               image: { medium: string, original: string}) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.language = language;
    this.genres = genres;
    this.rating = rating;
    this.image = image
  }
}
