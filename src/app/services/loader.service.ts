import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loader: LoadingController) { }

  showLoader() {

    this.loader.create({
      message: 'Please wait...',
      spinner: 'bubbles'
    }).then((res) => {
      res.present();
    });
  }

  hideLoader() {

    this.loader.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });

  }
}
