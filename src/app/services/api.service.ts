import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, CountryDetail } from '../classes/country';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apiUrl: string = 'https://restcountries.com/v3.1/';
  
constructor(private http : HttpClient) { }

getCountries(): Observable<Country[]>{
  return this.http.get<Country[]>(`${this.apiUrl}all`).pipe(
    map((data: any[]) => {
      return data.map((countryData) => {
        const country = new Country();
        country.name = countryData.name.common;
        country.capital = countryData.capital;
        country.region = countryData.region;
        country.population = countryData.population;
        country.flag = countryData.flags.svg;

        return country;
      });
    })
    );
}


getCountryDetail(country : string): Observable<CountryDetail[]>{
  return this.http.get<CountryDetail[]>(`${this.apiUrl}/name/${country}?fullText=true`).pipe(
    map((data: any[]) => {
      return data.map((countryData) => {
        const countryDetail = new CountryDetail();

        countryDetail.name = countryData.name.common;
        countryDetail.capital = countryData.capital;
        countryDetail.region = countryData.region;
        countryDetail.population = countryData.population;
        countryDetail.flag = countryData.flags.svg;
        countryDetail.topLevelDomain = countryData.tld;
        countryDetail.subregion = countryData.subregion;
        countryDetail.borders = countryData.borders;

        for (const key in countryData.name.nativeName) {
          if (countryData.name.nativeName.hasOwnProperty(key)) {
            countryDetail.nativeName.push(countryData.name.nativeName[key].common);
          }
        }
        for (const key in countryData.currencies) {
          if (countryData.currencies.hasOwnProperty(key)) {
            countryDetail.currencies.push(countryData.currencies[key].name);
          }
        }
        for (const key in countryData.languages) {
          if (countryData.languages.hasOwnProperty(key)) {
            countryDetail.languages.push(countryData.languages[key]);
          }
        }

        return countryDetail;
      });
    })
    );
}
}
