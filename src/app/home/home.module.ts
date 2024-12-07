import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// import { HeroesRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from "../shared/shared.module";
import { HeroPageComponent } from "./pages/hero-page/hero-page.component";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HeroPageComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
