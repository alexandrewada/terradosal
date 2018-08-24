import { YoutubeProvider } from './../../providers/youtube/youtube';
import { VideosPage } from './videos/videos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
// import * as Youtube from 'simple-youtube-api';


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
  loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loader:LoadingController,public yt:YoutubeProvider) {
    const youtube = this.yt;

    this.showLoading();


    youtube.getPlaylistsByChannelID('UCnIEvOh6AIq4Uu6nkTGQhdg')
    .then(results => {
      this.listPlaylists = results;
      this.listPlaylists.reverse();
      console.log(results);
      this.dismissLoading();
    })
    .catch(console.error);
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



  goToPlayList(playlistID,title){
    this.navCtrl.push(VideosPage,{
      'playlistID':playlistID,
      'programaName':title
    });
  }
  
  ionViewWillLeave() {
    this.dismissLoading();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramaPage');
  }

}
