import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.page.html',
  styleUrls: ['./starwars.page.scss'],
})
export class StarwarsPage implements OnInit {
  usuario: string = '';

  constructor(private route: ActivatedRoute) {}
  nebu = {
    img: "https://concepto.de/wp-content/uploads/2019/04/Nebulosa-de-Orion-e1554813166944.jpg"
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['data1'] || 'Invitado'; 
    });
  }
}
