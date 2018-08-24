import { SplashPage } from './../pages/splash/splash';
import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html',
  providers:[Network]
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private net: Network, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modal:ModalController) {
    platform.ready().then(() => {
      this.listenConnection();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // splashScreen.hide();

      let splash = modal.create(SplashPage);
      splash.present();


    });
  }

  private listenConnection(): void {
    this.net.onDisconnect()
      .subscribe(() => {
        this.showAlert();
      });
  }

  private showAlert(): void {
    alert('Este aplicativo precisa de internet.');
    console.log('Sem internet');
  }
}

