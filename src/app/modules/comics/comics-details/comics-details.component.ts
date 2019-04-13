import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/core/services/comics.service';
import { Comic } from 'src/app/shared/models/comic.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/shared/models/character.model';
import { Creator } from 'src/app/shared/models/creator.model';
import { Story } from 'src/app/shared/models/story.model';
import { CheckoutService } from 'src/app/core/services/checkout.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit {
  public comic: Comic;
  public characters: Character[];
  public creators: Creator[];
  public stories: Story[];
  public tabs: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private comicsService: ComicsService,
    private checkoutService: CheckoutService,
    public toastr: ToastrManager
  ) {}

  ngOnInit() {
    this.tabs = {
      About: true,
      Characters: false,
      Creators: false,
      Stories: false
    };
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        const that = this;
        that.comicsService.getById(id).subscribe(res => {
          that.comic = res.data.results[0];
          that.comicsService
            .getCharacters(that.comic.id)
            .subscribe(characters => {
              that.characters = characters.data.results;
            });
          that.comicsService.getCreators(that.comic.id).subscribe(creators => {
            that.creators = creators.data.results;
          });
          that.comicsService.getStories(that.comic.id).subscribe(stories => {
            that.stories = stories.data.results;
          });
        });
      }
    });
  }

  changeTab(tab: string) {
    for (const key in this.tabs) {
      if (this.tabs.hasOwnProperty(key)) {
        this.tabs[key] = key === tab;
      }
    }
  }

  getCurrentTab(tab: string) {
    return this.tabs[tab];
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
