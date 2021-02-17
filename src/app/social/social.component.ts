import { Component, OnInit } from '@angular/core';
import { fadeInDownAnimation, fadeInDownOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [
    fadeInDownOnEnterAnimation({ anchor: 'enter', duration: 1000})
  ]
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
