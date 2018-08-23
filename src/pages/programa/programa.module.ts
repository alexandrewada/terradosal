import { PlayerPage } from './player/player';
import { VideosPage } from './videos/videos';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramaPage } from './programa';
import { YoutubeProvider } from '../../providers/youtube/youtube';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    ProgramaPage,
    VideosPage,
    PlayerPage
  ],
  entryComponents: [
    VideosPage,
    PlayerPage
  ],
  providers: [
    YoutubeProvider,
    YoutubeVideoPlayer
  ],
  imports: [
    IonicPageModule.forChild(ProgramaPage),
  ],
})
export class ProgramaPageModule {}
