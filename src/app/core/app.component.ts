import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SessionService } from '../services/session.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(private menu: MenuController, public sessionService: SessionService, private nav: NavController) {
    
  }

  sair() {
    this.sessionService.logOff();
    this.nav.navigateRoot('login');
    this.menu.close();
  }

  closeMenu() {
    this.menu.close();
  }

  github() {
    window.open('https://github.com/farrosrafa/fatec-mobile', '_blank')
    this.menu.close();
  }

}
