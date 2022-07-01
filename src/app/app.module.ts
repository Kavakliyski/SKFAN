import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeatureSliderComponent } from './components/feature-slider/feature-slider.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerdetailsComponent } from './components/players/playerdetails/playerdetails.component';
import { InputUserDataFormComponent } from './components/input-user-data-form/input-user-data-form.component';

import { NgImageSliderModule } from 'ng-image-slider';

import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './reducers/product.reducer';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { DisplayuserdataComponent } from './components/displayuserdata/displayuserdata.component';
import { MatchesComponent } from './components/matches/matches.component';
import { CardViewComponent } from './components/matches/card-view/card-view.component';
import { TimeArrowComponent } from './components/matches/time-arrow/time-arrow.component';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageSliderComponent } from './components/home/image-slider/image-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureSliderComponent,
    ProductGridComponent,
    BannerComponent,
    FooterComponent,
    QuotesComponent,
    HomeComponent,
    PlayersComponent,
    PlayerdetailsComponent,
    InputUserDataFormComponent,
    MatchesComponent,
    CardViewComponent,
    TimeArrowComponent,
    ImageSliderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    NgImageSliderModule,
    ReactiveFormsModule,
    FormsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'merchandise', component: ProductGridComponent},
      { path: 'join', component: InputUserDataFormComponent },
      { path: 'matches', component: MatchesComponent },

      { path: 'players', component: PlayersComponent, children: [{
        path: ':name', component: PlayerdetailsComponent
      }] },

      // { path: 'user/:uid', component: DisplayuserdataComponent},
      
      { path: '**', component: PageNotFoundComponent },
    ]),
    StoreModule.forRoot({product: addProductReducer}),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    NgbModule

  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
