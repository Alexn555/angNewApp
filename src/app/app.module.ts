import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { PublicZoneModule } from './public_zone/public_zone.module';
import { NewcmpComponent } from './newcmp/newcmp.component';


@NgModule({
  declarations: [
    AppComponent,
    NewcmpComponent
  ],
  imports: [
    BrowserModule,
	  BrowserAnimationsModule,
   	CoreModule,
  	PublicZoneModule,
  	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
