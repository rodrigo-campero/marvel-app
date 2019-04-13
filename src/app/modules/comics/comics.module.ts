import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicsDetailsComponent } from './comics-details/comics-details.component';
import { ComicFilterPipe } from './comics-list/comic-filter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);


@NgModule({
  imports: [
    CommonModule,
    ComicsRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: [ComicsListComponent, ComicsDetailsComponent, ComicFilterPipe]
})
export class ComicsModule { }
