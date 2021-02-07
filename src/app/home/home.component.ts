import { Component, OnInit } from '@angular/core';
import { tadaAnimation } from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    tadaAnimation()
  ]
})
export class HomeComponent implements OnInit {
  animState = false;
  animating = false;

  constructor() { }

  ngOnInit(): void {
  }

  animDone(): void {
    if (this.animating) {
      this.animState = !this.animState;
    }
  }

  toggleAnimation(): void {
    this.animating = !this.animating;
    this.animState = !this.animState;
    console.log('Animation toggled.' + this.animating);
  }
}
