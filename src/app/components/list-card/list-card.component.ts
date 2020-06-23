import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../../classes/location';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  @Input() detail: Location;
  constructor() { }

  ngOnInit() {
  }

}
