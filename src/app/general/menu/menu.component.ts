import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menu: MenuController, private authServ: AuthService, private navCtrl: NavController) { }

  ngOnInit() {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  logout(){
    this.authServ.logOut();
    this.navCtrl.navigateBack('login');
  }

}
