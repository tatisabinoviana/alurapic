import { Photo } from './../photo/photo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  
  constructor(
    private photoSrevice: PhotoService,
    private activatedRoute: ActivatedRoute
    ) {}
  
  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoSrevice
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }

}
