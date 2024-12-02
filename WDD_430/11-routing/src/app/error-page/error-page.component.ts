import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.errorMessage = this.route.snapshot.data['message'];
    // the snapshot line above is more appropriate if the data doesn't change, I think
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    )
  }
}
