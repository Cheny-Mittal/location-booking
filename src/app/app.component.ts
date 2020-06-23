import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'location-booking';
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('register');
  }

  constructor() {
  }
}
