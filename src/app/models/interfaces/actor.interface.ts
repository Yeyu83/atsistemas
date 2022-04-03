import { Gender } from '@models/enums/gender.enum';

export interface Actor {
  id: number,
  first_name: string,
  last_name: string,
  gender: Gender,
  bornCity: string
  birthdate: string,
  img: string,
  rating: number,
  movies: number[]
}
