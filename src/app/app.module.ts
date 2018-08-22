import { ContatoPageModule } from './../pages/contato/contato.module';
import { AovivoPageModule } from './../pages/aovivo/aovivo.module';
import { LocalizacaoPageModule } from './../pages/localizacao/localizacao.module';
import { SobrePageModule } from './../pages/sobre/sobre.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FacebookPageModule } from '../pages/facebook/facebook.module';
import { ProgramaPageModule } from '../pages/programa/programa.module';
import { YoutubeProvider } from '../providers/youtube/youtube';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SobrePageModule,
    LocalizacaoPageModule,
    FacebookPageModule,
    AovivoPageModule,
    ContatoPageModule,
    ProgramaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YoutubeProvider
  ]
})
export class AppModule {}
