import { Component,ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { CronogramaPage } from '../pages/cronograma/cronograma';
import { PagosPage } from '../pages/pagos/pagos';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { ObservacionesPage } from '../pages/observaciones/observaciones';
import { ContratosPage } from '../pages/contratos/contratos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'LoginPage';
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Cronograma', component: CronogramaPage },
      { title: 'Pagos', component: PagosPage },
      { title: 'Pedidos', component: PedidosPage },
      { title: 'Observaciones', component: ObservacionesPage },
      { title: 'Contratos', component: ContratosPage }
     
    ];
  }

  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);//set root evita que aparesca la flecha al costado
  }

}

