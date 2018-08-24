import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html',
})
export class FacebookPage {

  loader:any;

  constructor(public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    this.loader = this.loadingCtrl.create({
      content: "Carregando facebook..."
    });

    this.loader.present();
  }

  LoadingOff() {
    this.loader.dismiss();
  }

  ionViewWillLeave() {
    this.LoadingOff();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacebookPage');
  }

}
