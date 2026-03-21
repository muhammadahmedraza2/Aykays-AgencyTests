import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './Components/features/features.component';
import { HeroComponent } from './Components/hero/hero.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ServiceComponent } from './Components/service/service.component';
import { HowitworkComponent } from './Components/howitwork/howitwork.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    HeroComponent,
    AboutusComponent,
    ServiceComponent,
    HowitworkComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
