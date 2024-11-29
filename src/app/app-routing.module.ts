import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// dominio.com/
const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
