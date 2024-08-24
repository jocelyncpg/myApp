import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StarwarsPage } from './starwars.page';
import { StarwarsPageRoutingModule } from './starwars-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarwarsPageRoutingModule
  ],
  declarations: [StarwarsPage]
})
export class StarwarsPageModule {}
