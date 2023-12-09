import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isToggledDarkMode: boolean = false;
  isToggledLeaf: boolean = false;

  toggleBackgroundColorDarkMode() {
    this.isToggledDarkMode = !this.isToggledDarkMode;
  }

  toggleBackgroundColorLeaf() {
    this.isToggledLeaf = !this.isToggledLeaf
  }
}
