import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieCardGenre'
})
export class MovieCardGenrePipe implements PipeTransform {
  transform(genre: string): string {
    return `#${genre}`
  }
}
