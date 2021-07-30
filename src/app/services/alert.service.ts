import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController) { }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Delete',
      message: 'Are you sure you want to delete this item ?',
      buttons: ['Cancel', 'Delete']
    });

    await alert.present();

    return await alert.onDidDismiss();

  }

}
