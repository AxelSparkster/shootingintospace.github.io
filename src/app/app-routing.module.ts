import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { animation: 'home' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' }
  },
  {
    path: 'social',
    component: SocialComponent,
    data: { animation: 'social' }
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
