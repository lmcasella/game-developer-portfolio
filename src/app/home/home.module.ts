import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// import { HeroesRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
