import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.scss']
})
export class MultimediaComponent implements OnInit {
  images: any[];
  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({source: 'assets/images/1.jpg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/images/2.jpg', alt: 'Description for Image 1', title: 'Title 1'});
        }
}
