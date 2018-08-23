import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {

  ContatoFormulario: FormGroup;

  constructor(private fbuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.ContatoFormulario = this.fbuilder.group({
      'nome': ['',Validators.required],
      'email': ['',Validators.required],
      'mensagem': ['',Validators.required]
    });
  }

  ionViewDidLoad() {
   

  }

}
