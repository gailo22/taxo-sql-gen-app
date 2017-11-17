import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';

import 'hammerjs';

import { ClassifiedComponent } from './classified/classified.component';
import { NotclassifiedComponent } from './notclassified/notclassified.component';
import { DisplayComponent } from './display/display.component';

import { FileuploadService } from './fileupload.service'
import { DisplayService } from './display.service'

@NgModule({
  declarations: [
    AppComponent,
    ClassifiedComponent,
    NotclassifiedComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [FileuploadService, DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
