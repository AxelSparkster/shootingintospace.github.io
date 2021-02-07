import { Component, ViewChild } from '@angular/core';
import { MdbCollapseDirective } from 'mdb-angular-ui-kit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shootinginto.space';

  @ViewChild('collapse')
  collapse!: MdbCollapseDirective;
}
