import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountryDetail } from 'src/app/classes/country';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  country : CountryDetail[] = [];
  countryBordersCodes : string[] | any= [];
  countryBordersNames : string[] = [];
  @Output() backToMain = new EventEmitter<void>();
  @Input() selectedCountry: string = '';
  
  constructor(private apiService : ApiService){}
  ngOnInit() {
    if (this.selectedCountry) {
      this.getCountryBorderDetail(this.selectedCountry);
        }
      }

  getCountryBorderDetail(countryName: string){
    this.apiService.getCountryDetail(countryName).subscribe((data: CountryDetail[]) => {
    this.country = data;
    this.countryBordersCodes = this.country[0].borders;
    console.log(this.countryBordersNames,this.countryBordersCodes)

    // Obtener los nombres de los países que limitan con el país seleccionado
    if (this.countryBordersCodes && this.countryBordersCodes.length > 0) {
       this.getCountryBordersName(this.countryBordersCodes);
  }
})
};

getCountryBordersName(bordersCodes : string[]){
  this.apiService.getCountriesNamesFromCodes(bordersCodes).subscribe((data: string[]) => this.countryBordersNames = data );
}

onBackToMain() { this.backToMain.emit() };

}
