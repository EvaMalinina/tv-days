export interface IShow {
  externals?: {imdb: string, thetvdb: string, tvrage: string };
  genres?: string[];
  id?: string;
  image?: { medium: string, original: string };
  language?: string;
  name?: string;
  network?: {
    country: {name: string, code: string, timezone: string},
    id: string
    name: string
  };
  officialSite?: string;
  premiered?: string;
  rating?: { average: string };
  runtime?: string;
  schedule?: { days: string[], time: string };
  status?: string;
  summary?: string;
  type?: string;
  updated?: string;
  url?: string;
  webChannel?: string;
  weight?: string;
}
