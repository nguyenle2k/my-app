import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './routes/components/header/header.component';
import { FooterComponent } from './routes/components/footer/footer.component';
import { MainComponent } from './routes/components/main/main.component';
import { HomeComponent } from './routes/pages/home/home.component';
import { TestComponent } from './routes/pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
