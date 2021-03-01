import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailCreatorPageRoutingModule } from './email-creator-routing.module';

import { EmailCreatorPage } from './email-creator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailCreatorPageRoutingModule
  ],
  declarations: [EmailCreatorPage]
})
export class EmailCreatorPageModule {}
