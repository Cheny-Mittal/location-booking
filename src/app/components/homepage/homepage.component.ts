import { Component, OnInit } from '@angular/core';
import { Location } from '../../classes/location';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  locationList: Location[]= [{
    name: "Fortune Landmark",
    ratings: 4,
    distance: 1.2,  
    baseImage: './assets/fortune.jpg', 
  },
  {
    name: "Fortune Landmark",
    ratings: 4,
    distance: 1.2,     
    baseImage: './assets/fortune.jpg',
  },
  {
    name: "Fortune Landmark",
    ratings: 4,
    distance: 1.2,     
    baseImage: './assets/fortune.jpg',
  },
  {
    name: "Fortune Landmark",
    ratings: 4,
    distance: 1.2,     
    baseImage: './assets/fortune.jpg',
  }];
  constructor() { }

  ngOnInit() {
  }

}
