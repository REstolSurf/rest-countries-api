import { Component, EventEmitter, Output } from '@angular/core';
import { Country } from 'src/app/classes/country';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  showRegions: boolean = false;
  showCountries: boolean = true;

  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  countries: Country[] = [];
  countriesToShow: Country[] = [];

  @Output() countrySelected = new EventEmitter<string>();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCountries().subscribe((data: Country[]) => {
      this.countries = data;
      this.countriesToShow = this.countries;
    });
  }

  filterByRegion(region: string) {
    this.showRegions = false;
    this.countriesToShow = this.countries.filter(
      (country) => country.region === region
    );
  }

  filterByName(event: KeyboardEvent) {
    const countryName: string = (event.target as HTMLInputElement).value;

    this.countriesToShow = this.countries.filter((country) =>
      country.name.toLowerCase().includes(countryName.trim().toLowerCase())
    );
  }

  onCountrySelected(countryName: string) {
    this.countrySelected.emit(countryName);
  }
}
