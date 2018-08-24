import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

/**
 * Generated class for the AovivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aovivo',
  templateUrl: 'aovivo.html',
  providers: [StreamingMedia]
})
export class AovivoPage {

  constructor(  private streamingMedia: StreamingMedia,public navCtrl: NavController, public navParams: NavParams) {
  }

  startVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };

    this.streamingMedia.playVideo('http://srv9.zoeweb.tv:1935/zw9009/stream/playlist.m3u8', options);
  }

  ionViewDidLoad() {
    this.startVideo();
  }

}
