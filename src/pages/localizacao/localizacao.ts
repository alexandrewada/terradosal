import { Component } from '@angular/core';
import {Loading, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

  loading:Loading;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    this.loading.present();
  }

  LoadingOff() {
    this.loading.dismiss();
  }

  ionViewWillLeave() {
    this.LoadingOff();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizacaoPage');
  }

}
