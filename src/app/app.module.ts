import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  declarations: [AppComponent, SlideshowComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,

    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
