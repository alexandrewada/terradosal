import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  youtubeUrl: any;
 
  trustedVideoUrl: SafeResourceUrl;

  loading;
  videoTitle;

  constructor(public loader: LoadingController,public navCtrl: NavController, public navParams: NavParams,private domSanitizer: DomSanitizer) {
    this.youtubeUrl = 'https://www.youtube.com/embed/'+this.navParams.get('videoID');
    this.videoTitle = this.navParams.get('videoTitle');
    this.showLoading();
  }

  showLoading() {
    if(!this.loading){
          this.loading = this.loader.create({
              content: 'Carregando aguarde...'
          });
          this.loading.present();
      }
  }

  dismissLoading(){
      if(this.loading){
          this.loading.dismiss();
          this.loading = null;
      }
  }

  ionViewWillLeave() {
    this.dismissLoading();
  }

  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerPage');
  }

}
