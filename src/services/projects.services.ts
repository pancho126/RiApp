import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class ProjectServices {

    constructor(public afDB: AngularFireDatabase){

    }

    projects = [ ];

    public createProject(Project){
        this.afDB.database.ref("Project/"+Project.id).set(Project);//firebase
        
    }

    public getProjects(){
        return   this.afDB.list("Project/");//firebase
        
    }

    public getProject(id){
        return   this.afDB.object("Project/"+id);
    }

    public editProject(Project){
       
         this.afDB.database.ref("Project/"+Project.id).set(Project);//firebase
     
     }

     public deleteProject(Project){
    

        this.afDB.database.ref("projects/"+Project.id).remove();//firebase
        
     }
}