// Este es nucleo de importancion de este proyecto

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { TaxPipe } from './pipes/tax.pipe'
import { HighlightDirective } from './highlight.directive'

import { HomePage } from './home/home.page'
import { UserComponent } from './components/user/user.component'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalcComponent } from './components/calc/calc.component';

@NgModule({

  // Importar y declara los modulos
  declarations: [AppComponent, HomePage, UserComponent, CalcComponent,],
  // Importar los fragmentos de codigo de manera glogal
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, TaxPipe ,HighlightDirective],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
