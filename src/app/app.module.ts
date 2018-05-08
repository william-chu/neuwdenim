import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterProductPipe } from './filterproduct.pipe';
import { FilterJeanFitGenderPipe } from './filterjeanfitgender.pipe';
import { routing } from './app.routing';

import { DisplayNavbarComponent } from './display-navbar/display-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MensSaleComponent } from './mens-sale/mens-sale.component';
import { WomensSaleComponent } from './womens-sale/womens-sale.component';
import { SaleItemDetailComponent } from './sale-item-detail/sale-item-detail.component';
import { BrandPageComponent } from './brand-page/brand-page.component';
import { FitPageComponent } from './fit-page/fit-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { KeyLooksPageComponent } from './key-looks-page/key-looks-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayNavbarComponent,
    FilterProductPipe,
    FilterJeanFitGenderPipe,
    MensSaleComponent,
    WomensSaleComponent,
    HomePageComponent,
    SaleItemDetailComponent,
    BrandPageComponent,
    FitPageComponent,
    InfoPageComponent,
    KeyLooksPageComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
