import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndicadorComponent } from './indicador/indicador.component';
import { ShowIndComponent } from './indicador/show-ind/show-ind.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { ViewIndComponent } from './indicador/view-ind/view-ind.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicadorComponent,
    ShowIndComponent,
    ViewIndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
