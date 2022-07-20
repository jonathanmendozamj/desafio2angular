import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    ContentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
