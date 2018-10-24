
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [StreamingMedia]
})
export class HomePage {

  constructor( private streamingMedia: StreamingMedia, public navCtrl: NavController) {

  }

  startVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { alert('Ocorreu um erro na reprodução do vídeo.') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };

    this.streamingMedia.playVideo('http://srv9.zoeweb.tv:1935/zw9009/stream/playlist.m3u8', options);
  }


  goPage(page) {
    this.navCtrl.push(page);
  }



}
