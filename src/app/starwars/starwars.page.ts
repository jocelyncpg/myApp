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

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['data1'] || 'Invitado'; 
    });
  }
}
