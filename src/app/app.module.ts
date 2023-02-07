import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { StudentfeeComponent } from './studentfee/studentfee.component';
import {SharedModule} from './shared/shared.module';
import { ApplicationfeeComponent } from './applicationfee/applicationfee.component';
import { CertificatefeeComponent } from './certificatefee/certificatefee.component'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    StudentfeeComponent,
    ApplicationfeeComponent,
    CertificatefeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
