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
  @Output() backToMain = new EventEmitter<void>();
  @Input() selectedCountry: string = '';
  
  constructor(private apiService : ApiService){}
  ngOnInit() {
    if(this.selectedCountry){
    this.apiService.getCountryDetail(this.selectedCountry).subscribe((data: CountryDetail[]) => {
      this.country = data;
      console.log(this.country);
  });
  }
};

onBackToMain() { this.backToMain.emit() };

}
