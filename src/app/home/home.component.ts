import { Component, OnInit } from '@angular/core';
import { rotateAnimation, pulseAnimation } from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    rotateAnimation({ duration: 4000, delay: 100, degrees: 360 }),
    pulseAnimation({duration: 5000, delay: 100, scale: 1.1})
  ]
})
export class HomeComponent implements OnInit {
  starState = false;
  ringState = false;

  constructor() { }

  ngOnInit(): void {
    this.starState = !this.starState;
    this.ringState = !this.ringState;
  }

  starAnimDone(): void {
    this.starState = !this.starState;
  }

  ringAnimDone(): void {
    this.ringState = !this.ringState;
  }
}
