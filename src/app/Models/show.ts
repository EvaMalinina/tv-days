import { IShow } from './show.model';

export class Show implements IShow {
  externals = {imdb: '', thetvdb: '', tvrage: '' };
  genres = [];
  id = '';
  image = { medium: '', original: ''};
  language = '';
  name = '';
  network = {
      country: {name: '', code: '', timezone: ''},
      id: '',
      name: ''
  };
  officialSite = '';
  premiered = '';
  rating = { average: '' };
  runtime = '';
  schedule = { days: [], time: '' };
  status = '';
  summary = '';
  type = '';
  updated = '';
  url = '';
  webChannel = '';
  weight = '';
  isSeen = false;
}
