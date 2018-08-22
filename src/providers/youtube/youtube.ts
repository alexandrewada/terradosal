
import { Injectable } from '@angular/core';
import * as Youtube from 'simple-youtube-api';


/*
  Generated class for the YoutubeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YoutubeProvider {

  
  private apiKey = 'AIzaSyDwl473UaSR7IMIDf8cQDuBXi1xmmU7vGA';
  private yt;

  constructor() {
    this.yt = new Youtube(this.apiKey);
  }

  getPlaylistsByChannelID(channelID,limit=30){
    return this.yt.searchPlaylists('',limit,{channelId:channelID});
  }

  getVideosByPlaylistID(playListID){
    return this.yt.getPlaylistByID(playListID);
  }

}
