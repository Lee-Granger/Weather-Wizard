import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'Home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
