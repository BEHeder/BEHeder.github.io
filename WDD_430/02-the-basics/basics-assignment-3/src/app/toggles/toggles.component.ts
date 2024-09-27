import { Component } from '@angular/core';

@Component({
  selector: 'app-toggles',
  templateUrl: './toggles.component.html',
  styleUrl: './toggles.component.css'
})
export class TogglesComponent {
  paragraphDisplayed = false;
  toggles = [];
  increment = 0;

  toggleParagraph() {
    this.paragraphDisplayed = !this.paragraphDisplayed;
    this.increment++;
    this.toggles.push(this.increment);
  }
}
