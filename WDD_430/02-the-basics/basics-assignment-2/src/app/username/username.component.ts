import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrl: './username.component.css'
})
export class UsernameComponent {
  username = '';
  allowResetUsername = false;

  // constructor() {
  //   if (this.username == '') {
  //     this.allowResetUsername = true;
  //   }
  //   else {
  //     this.allowResetUsername = false;
  //   }
  // }

  onType(event: Event) {
    if ((<HTMLInputElement>event.target).value == '') {
      this.allowResetUsername = false;
    }
    else {
      this.allowResetUsername = true;
    }
  }

  onResetUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value = '';
    this.allowResetUsername = false;
  }
}
