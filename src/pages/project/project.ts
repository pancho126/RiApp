import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireAuth} from 'angularfire2/auth';
//import { Project } from '../../models/project';
import { ProjectServices } from '../../services/projects.services';


/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {

  //project= {} as Project;
  
  Project:any ={id:null,name:null,description:null,state:null};
  id=null;
  show=true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public projectServices: ProjectServices) {
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

  /*createProject(){
    this.afAuth.authState.take(1).subscribe(auth=> {
        this.afDatabase.list(`profile/${auth.uid}`).push(this.project)
        .then(() => this.navCtrl.setRoot(`WelcomePage`));
    });

  }*/

  addProject(){
    this.Project.id=Date.now();
    this.projectServices.createProject(this.Project);
    alert('Ahora tienes un nueva obra!!');
    
  }

  return(){
    this.navCtrl.setRoot("WelcomePage");
  }


}
