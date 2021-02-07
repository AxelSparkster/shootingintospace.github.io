import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { animation: 'home' },
  },
  {
    path: 'page1',
    component: Page1Component,
    data: { animation: 'page1' }
  },
  {
    path: 'page2',
    component: Page2Component,
    data: { animation: 'page2' }
  },

  // just redirect home if it's not found
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
