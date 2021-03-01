import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CustomList } from '../utils/classes';
 
//const nodemailer = require('nodemailer');
 
@Component({
  selector: 'app-email-creator',
  templateUrl: './email-creator.page.html',
  styleUrls: ['./email-creator.page.scss'],
})
export class EmailCreatorPage{
  
  constructor(private route: ActivatedRoute,private router: Router, private emailComposer: EmailComposer) {
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.SelectedEmails = this.router.getCurrentNavigation().extras.state.SelectedEmails;
      }
    })
  }
  
  //inputs from model
  InName: string;
  InEmai: string;
  InPass: string;
  InAsun: string;
  InBody: string;


  SelectedEmails: CustomList<string> = new CustomList<string>();
  sub: any;
  
  codigo_prueba: string = '<label>Etiqueta enviada como codigo en formato string</label>';

  pruebas: boolean = false;

   ngOnInit(){
    if(/* this.SelectedEmails && */ this.SelectedEmails.size() == 0){
      this.router.navigate(['/home']);
    }
   }

  Debug1(){
    console.log(this.SelectedEmails.getAll());
  }

 SendEmail(){
  let email = {
    to: this.SelectedEmails.getAll(),
    attachments: [
    ],
    subject: this.InAsun,
    body: this.InBody,
    isHtml: false
  };
  // Send a text message using default options
  this.emailComposer.open(email);
  
     
  }
}
