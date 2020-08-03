import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ChartsModule } from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SplashscreenComponent } from './splashscreen/splashscreen.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { MainComponent } from './main/main.component'
import { ListCasesComponent } from './list-cases/list-cases.component'
import { MapCasesComponent } from './map-cases/map-cases.component'
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    SplashscreenComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ListCasesComponent,
    MapCasesComponent,
    TimelineChartComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
