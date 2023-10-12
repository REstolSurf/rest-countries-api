import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rest-countries-api';
  showCountryDetail : boolean = false;
  selectedCountry : string = '';

  onCountrySelected(countryName: string){
    this.showCountryDetail = true;
    this.selectedCountry = countryName;
  }

  onBackToMain(){ this.showCountryDetail = false };
}
