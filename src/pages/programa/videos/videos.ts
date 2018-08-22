import { YoutubeProvider } from './../../../providers/youtube/youtube';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


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

  constructor(public player:YoutubeVideoPlayer, public navCtrl: NavController, public navParams: NavParams, public yt:YoutubeProvider, public loading:LoadingController) {
    this.playlistID   = this.navParams.get('playlistID');
    this.programaName = this.navParams.get('programaName');
    const loader = this.loading.create({
      content: "Carregando aguarde..."
    });

  
    loader.present();
    this.yt.getVideosByPlaylistID(this.playlistID)
    .then(results => {
      results.getVideos().then( v => {
        this.listVideos = v;
        console.log(v);
        loader.dismiss();
      });
    })
    .catch(console.error);

  }

  goWatchVideo(videoID){
    this.player.openVideo(videoID);
  }

  ionViewDidLoad() {
    console.log(this.listVideos);
  }

}
