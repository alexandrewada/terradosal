
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';



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
  providers: [EmailComposer]
})
export class ContatoPage {

  ContatoFormulario: FormGroup;

  constructor(private emailComposer: EmailComposer,private fbuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {

    this.ContatoFormulario = this.fbuilder.group({
      'nome': ['',Validators.required],
      'email': ['',Validators.required],
      'mensagem': ['',Validators.required]
    });
  }

  enviarEmail() {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: 'app@tvterradoral.com.br',
       attachments: [
       ],
       subject: 'Contato TV do Sal # '+this.ContatoFormulario.get('nome').value,
       body: this.ContatoFormulario.get('mensagem').value,
       isHtml: false
     };
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }

  ionViewDidLoad() {

  }

}
