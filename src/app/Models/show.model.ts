export interface IShow {
  id?: string;
  url?: string;
  name?: string;
  language?: string;
  genres?: string[];
  rating?: { average: string };
  image?: { medium: string, original: string}
}
