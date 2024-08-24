import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  serie = {
    nombre: "Formulario Login",
    img: ""
  }

  user = {
    usuario: "",
    password: ""
  }

  constructor(private navController: NavController) {}

  goToStarWars() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data1: this.user.usuario
      }
    };
    this.navController.navigateForward(['/starwars'], navigationExtras);
  }
}





