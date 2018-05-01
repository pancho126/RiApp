import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { ProjectServices } from '../../services/projects.services';
import { ProjectPage } from '../project/project';
//import {FirebaseObjectObservable} from "angularfire2/database-deprecated";
//import { Profile } from '../../models/profile';
//import { Project } from '../../models/project';
//import { ProjectPage} from "../../pages/project/project";
//import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  //project= {} as Project;

  //profileData: FirebaseObjectObservable<Profile>
  projects = [ ];
  @ViewChild('myNav') nav: NavController

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,
  private toast: ToastController, public projectServices: ProjectServices) 
  {
         projectServices.getProjects().valueChanges()
         .subscribe( proyects=>{
             this.projects = proyects;
         });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad WelcomePage');
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid){
        this.toast.create({
          message:`Bienvenido a Riapp, ${data.email}`,
          duration:3000
         }).present();
      
       // this.profileData = this.afDatabase.object(`profile/${data.email}`) ;

      } 
      else {
        this.toast.create({
          message:'No se puede ingresar debido a que la contraseña o email estan mal escritos',
          duration:3000
         }).present();
      }
    });

  }

  logout(){
    this.afAuth.auth.signOut().then(res => {
      this.navCtrl.setRoot("LoginPage"); 
    });
  }

  perfil(){
    this.navCtrl.push('ProfilePage');
  }

  newProject(){
   this.navCtrl.push(ProjectPage);
  }

  public revisar(id){
    this.navCtrl.setRoot('ObraPage');
  }
  
}
