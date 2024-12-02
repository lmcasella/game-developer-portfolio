import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// import { HeroesRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
