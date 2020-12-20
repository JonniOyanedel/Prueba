import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicadorComponent } from './indicador/indicador.component';

const routes: Routes = [
  {path:'indicador',component:IndicadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
