import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';
import { HttpService } from './services/http.service';

import { TaxPipe } from './pipes/tax.pipe';
import { HighlightDirective } from './highlight.directive';

import { HomePage } from "./home/home.page";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './components/user/user.component'
import { CalcComponent } from './components/calc/calc.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent,
    HomePage,
    UserComponent,
    CalcComponent,
    LoginComponent],

  imports: [BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    TaxPipe,
    HighlightDirective],

  providers: [{ provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy },
    LocalStorageService,
    HttpService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
