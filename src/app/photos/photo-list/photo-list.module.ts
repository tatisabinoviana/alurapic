import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PhotoListComponent, 
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription, 
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule, 
    CardModule
  ]
})
export class PhotoListModule {

}