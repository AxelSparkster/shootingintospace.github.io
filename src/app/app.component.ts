import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdbCollapseDirective } from 'mdb-angular-ui-kit';
import { fadeInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeInAnimation ]
})
export class AppComponent {
  title = 'shootinginto.space';

  @ViewChild('collapse')
  collapse!: MdbCollapseDirective;

  // tslint:disable-next-line: typedef
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet?.activatedRouteData &&
      outlet.activatedRouteData.animation
    );
  }
}
