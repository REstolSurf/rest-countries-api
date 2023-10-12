export class Country {
    name: string = '';
    capital: string = '';
    region: string = '';
    population: number = 0;
    flag: string = '';
  }
  export class CountryDetail extends Country {
    topLevelDomain: string[] = [];
    subregion: string = '';
    borders: string[] = [];
    nativeName: object[]= [];
    currencies: any[] = [];
    languages: any[] = [];
}