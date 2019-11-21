import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {SingleMediaPlayer} from './single-media-player';


import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleMediaPlayer
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent, SingleMediaPlayer]
})
export class AppModule {
}
