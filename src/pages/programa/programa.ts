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


  constructor(public navCtrl: NavController, public navParams: NavParams, public loading:LoadingController,public yt:YoutubeProvider) {
    const youtube = this.yt;
    const loader = this.loading.create({
      content: "Carregando aguarde..."
    });
    loader.present();
    youtube.getPlaylistsByChannelID('UCnIEvOh6AIq4Uu6nkTGQhdg')
    .then(results => {
      this.listPlaylists = results;
      console.log(results);
      loader.dismiss();
    })
    .catch(console.error);
  }

  showLoading():void {


  }

  goToPlayList(playlistID,title){
    this.navCtrl.push(VideosPage,{
      'playlistID':playlistID,
      'programaName':title
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramaPage');
  }

}
