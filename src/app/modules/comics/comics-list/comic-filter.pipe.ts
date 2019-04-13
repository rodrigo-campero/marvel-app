import { Pipe, PipeTransform } from '@angular/core';
import { ComicsService } from 'src/app/core/services/comics.service';

@Pipe({
  name: 'comicFilter'
})
export class ComicFilterPipe implements PipeTransform {
  constructor(private comicsService: ComicsService) { }
  transform(items: any, searchText: any): any {
    this.comicsService.getAll(searchText, 10, 0).subscribe(res => {
      items = res.data.results;
      return items;
    });
  }
}
