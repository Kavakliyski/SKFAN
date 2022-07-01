import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feature-slider',
  templateUrl: './feature-slider.component.html',
  styleUrls: ['./feature-slider.component.scss']
})
export class FeatureSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 

  imageObject: Array<object> = [
    {
      image: '../assets/slider-img-1.jpg',
      thumbImage: '../assets/slider-img-1.jpg',
      
    }, 
    {
      image: '../assets/slider-img-2.jpg', // Support base64 image
      thumbImage: '../assets/slider-img-2.jpg',
      // title: 'Image title', //Optional: You can use this key if want to show image with title
      // alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    },
    {
      image: '../assets/slider-img-3.jpg',
      thumbImage: '../assets/slider-img-3.jpg',
    },
    {
      image: '../assets/slider-img-4.jpg',
      thumbImage: '../assets/slider-img-4.jpg',
    },
    {
      image: '../assets/slider-img-5.jpg',
      thumbImage: '../assets/slider-img-5.jpg',
    },
    {
      image: '../assets/slider-img-6.jpg',
      thumbImage: '../assets/slider-img-6.jpg',
    },
    {
      image: '../assets/slider-img-7.jpg',
      thumbImage: '../assets/slider-img-7.jpg',
    },
    {
      image: '../assets/slider-img-8.jpg',
      thumbImage: '../assets/slider-img-8.jpg',
    },
  ];
}
