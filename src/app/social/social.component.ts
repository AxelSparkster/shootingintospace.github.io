import { Component, OnInit } from '@angular/core';
import { fadeInDownAnimation, fadeInDownOnEnterAnimation } from 'angular-animations';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [
    fadeInDownOnEnterAnimation()
  ]
})
export class SocialComponent implements OnInit {

  public items: SocialLocation[] = [
    { id: 1, name: 'Twitter' },
    { id: 2, name: 'Furaffinity' },
    { id: 3, name: 'Github' }
  ];

constructor() { }

ngOnInit(): void {
  }

}

export interface SocialLocation {
  id: number;
  name: string;
  iconUrl?: string;
  linkUrl?: string;
  description?: string;
}
