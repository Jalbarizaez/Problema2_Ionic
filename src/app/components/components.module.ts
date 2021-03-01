import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailBodyTestComponent } from './email-body-test/email-body-test.component';


@NgModule({
  declarations: [
    EmailBodyTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmailBodyTestComponent
  ]
})
export class ComponentsModule { }
