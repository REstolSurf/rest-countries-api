import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
showRegions :boolean = false;
showCountries :boolean = true;

regions : string[]= [];
countries: any[] = [
  {
    name: 'Country 1',
    population: 1000000,
    region: 'Region 1',
    capital: 'Capital 1',
    flag: 'https://flagcdn.com/al.svg'
  },
  {
    name: 'Country 2',
    population: 2000000,
    region: 'Region 2',
    capital: 'Capital 2',
    flag: 'https://flagcdn.com/ax.svg'
  },
  // Agrega más objetos country según tus necesidades
];

  
filterByRegion(region: string) {
}

filterByCountry(countryName: string){
  

}
}

