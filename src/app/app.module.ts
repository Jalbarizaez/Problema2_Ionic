import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule],
  providers: [    
    EmailComposer,
    { provide: RouteReuseStrategy,useClass: IonicRouteStrategy ,} ],
  bootstrap: [AppComponent],
})
export class AppModule {}
