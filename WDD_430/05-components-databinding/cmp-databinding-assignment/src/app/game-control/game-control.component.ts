import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  ref;
  incremental = 0;

  onStart() {
    this.ref = setInterval(() => {
      this.incremental++;
    }, 1000);
  }

  onStop() {
    clearInterval(this.ref);
  }
}
