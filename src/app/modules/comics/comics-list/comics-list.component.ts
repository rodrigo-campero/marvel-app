import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/core/services/comics.service';
import { Comic } from 'src/app/shared/models/comic.model';
import { CheckoutService } from 'src/app/core/services/checkout.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  public searchText: string;
  public obj: any;
  public comics: Comic[];
  public isLoading: boolean;
  public isPreLoading: boolean;

  private limit: number = 10;
  private offset: number = 0;

  constructor(
    private comicsService: ComicsService,
    private checkoutService: CheckoutService,
    public toastr: ToastrManager
  ) { }

  ngOnInit() {
    const that = this;
    that.isPreLoading = true;
    this.comicsService.getAll(that.searchText, that.limit, that.offset).subscribe(res => {
      that.comics = res.data.results;
      that.setRare();
      that.isPreLoading = false;
    });
  }

  private getRareComic(): number {
    return Math.floor(Math.random() * this.limit) + (this.offset * this.limit);
  }

  private setRare(): void {
    if (this.comics && this.comics.length > 0) {
      this.comics[this.getRareComic()].isRare = true;
    }
  }

  search(): void {
    const that = this;
    that.isLoading = true;
    that.offset = 0;
    that.comicsService.getAll(that.searchText, that.limit, that.offset).subscribe(res => {
      that.comics = res.data.results;
      that.setRare();
      that.isLoading = false;
    });
  }

  showMore(): void {
    const that = this;
    that.isLoading = true;
    that.offset += 1;
    that.comicsService.getAll(that.searchText, that.limit, that.offset).subscribe(res => {
      that.comics = that.comics.concat(res.data.results);
      that.setRare();
      that.isLoading = false;
    });
  }

  addToCar(comic: Comic): void {
    const that = this;
    that.checkoutService.add(comic);
    that.toastr.successToastr('Comic added to cart', 'Success!', { position: 'bottom-right' });
  }

  isInTheCart(id: number): boolean {
    return this.checkoutService.isInTheCart(id);
  }
}
