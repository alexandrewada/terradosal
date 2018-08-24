import { PlayerPage } from './../player/player';
import { YoutubeProvider } from './../../../providers/youtube/youtube';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  public playlistID;
  public listVideos = [];
  public programaName = 'Vídeos';
  loading;

  constructor( public navCtrl: NavController, public navParams: NavParams, public yt:YoutubeProvider, public loader:LoadingController) {
    this.playlistID   = this.navParams.get('playlistID');
    this.programaName = this.navParams.get('programaName');

    this.showLoading();
  
    this.yt.getVideosByPlaylistID(this.playlistID)
    .then(results => {
      results.getVideos().then( v => {
        this.listVideos = v;
        this.listVideos.reverse();
        console.log(v);
        this.dismissLoading();
      });
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


  goWatchVideo(videoID,title){
    //this.player.openVideo(videoID);
    this.navCtrl.push(PlayerPage,{
      'videoID':videoID,
      'videoTitle':title
    });
  }

  ionViewWillLeave() {
    this.dismissLoading();
  }

  ionViewDidLoad() {
    console.log(this.listVideos);
  }

}
