import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailCreatorPageModule } from './email-creator/email-creator.module';
import { HomePageModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmailCreatorPageModule,
    HomePageModule
  ],
  exports:[
    EmailCreatorPageModule,
    HomePageModule
  ]
})
export class PagesModule { }
