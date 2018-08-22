import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as Youtube from 'simple-youtube-api';

/**
 * Generated class for the ProgramaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programa',
  templateUrl: 'programa.html',
})
export class ProgramaPage {

  public listPlaylists = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public loading:LoadingController) {
    const youtube = new Youtube('AIzaSyDwl473UaSR7IMIDf8cQDuBXi1xmmU7vGA');
    const loader = this.loading.create({
      content: "Please wait..."
    });
    loader.present();
    youtube.searchPlaylists('',20,{channelId:'UCnIEvOh6AIq4Uu6nkTGQhdg'})
    .then(results => {
      this.listPlaylists = results;
      console.log(results);
      loader.dismiss();
    })
    .catch(console.error);
  }

  showLoading():void {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramaPage');
  }

}
