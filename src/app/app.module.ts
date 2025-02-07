// Este es nucleo de importancion de este proyecto

// Angular Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// Components
import { AppComponent } from './app.component';
import { HomePage } from './home/home.page';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { CalcComponent } from './components/calc/calc.component';

// Services
import { LocalStorageService } from './services/local-storage.service';

// Pipes and Directives
import { TaxPipe } from './pipes/tax.pipe';
import { HighlightDirective } from './highlight.directive';

// Modules
import { AppRoutingModule } from './app-routing.module';


@NgModule({

  // Importar y declara los modulos
  declarations: [
    AppComponent,
    HomePage,
    UserComponent,
    CalcComponent,
    LoginComponent ],
  // Importar los fragmentos de codigo de manera glogal
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TaxPipe ,
    HighlightDirective,
    ReactiveFormsModule],
  providers: [

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
