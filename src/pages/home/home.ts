import { LocalizacaoPage } from './../localizacao/localizacao';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goLocalizacao() {
    this.navCtrl.push(LocalizacaoPage);
  }

}
