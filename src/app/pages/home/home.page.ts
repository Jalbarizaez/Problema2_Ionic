import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, Input } from '@angular/core';
import { CustomList } from '../utils/classes';
import {AlertController} from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController,private router: Router) {}

  ListaCorreosFalsosPrueba: string[] = [
    'correo_001@mail.com',
    
  ];

  SelectedEmails: CustomList<string> = new CustomList<string>();

  Listaaaaaa: CustomList<string> = new CustomList<string>();

  pruebas: boolean = true;

  regex: RegExp = new RegExp('^[a-zA-Z]([\.]?[a-zA-Z0-9_]+)*@[a-zA-Z]([\.]?[a-zA-Z]{2,})+$');


  async onClick(){
    console.log(this.SelectedEmails.getAll());
    const alert = await this.alertController.create({
      backdropDismiss: true,
      header: 'Correos seleccionados',
      buttons:['ok']
    });
    await alert.present();

  }

  UpdateList(event,correo:string){
    console.log((event.detail.checked ? 'Add':'Delete'),correo);

    if(event.detail.checked)
    {
      console.log(this.SelectedEmails.addIfNotExist(correo));
    }
    else
    {
      console.log(this.SelectedEmails.deleteValue(correo));
    }
  }

  async AddEmailAlertPrompt() {
    const alert = await this.alertController.create({
      backdropDismiss: true,
      header: 'Agregar nuevo correo',
      inputs: [
        {
          name: 'Email',
          type: 'email',
          placeholder: 'Nueva direccion de correo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Ok',
          handler: Inputs => {
            if(Inputs.Email != ''){
              if(this.regex.test(Inputs.Email)){
                this.ListaCorreosFalsosPrueba.push(Inputs.Email);
              }
              else{ this.InvalidEmailAlert() }
            }
          }
        }
      ]
    });

    await alert.present();
  }
  
  async InvalidEmailAlert(){
    const alert = await this.alertController.create({
      backdropDismiss: true,
      header: 'Correo Invalido!!!',
      buttons:['ok']
    });
    await alert.present();
  }
  async NoMailsSelected(){
    const alert = await this.alertController.create({
      backdropDismiss: true,
      header: 'Por favor seleccione minimo 1 correo',
      buttons:['ok']
    });
    await alert.present();
  }

  GoToEmailCreator(){
    let navExtras: NavigationExtras ={
      state: {
        SelectedEmails: this.SelectedEmails
      }
    }
    if(this.SelectedEmails.size()>0){
      this.router.navigate(['/email-creator'],navExtras);
    }
    else { this.NoMailsSelected() }
  }

}
