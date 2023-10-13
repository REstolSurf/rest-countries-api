import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';
import { FormatNumWithCommasPipe } from './pipes/format-num-with-commas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    DetailComponent,
    FormatNumWithCommasPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
