import { Genre } from '@models/enums/genre.enum';

export interface Film {
  id: number,
  title: string,
  poster: string
  genre: Genre,
  year: number,
  duration: number,
  imdbRating: number,
  actors: number
}
