import { Genre } from '@models/enums/genre.enum';

export interface Movie {
  id: number,
  title: string,
  poster: string
  genre: Genre,
  year: number,
  duration: number,
  imdbRating: number,
  actors: number
}
