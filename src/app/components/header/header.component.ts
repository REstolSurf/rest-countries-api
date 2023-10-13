import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkMode : boolean = false;
  
  constructor( @Inject(DOCUMENT) private document : Document, private renderer : Renderer2){

  }

  ngOnInit(){
    //comprobamos si el usuario tiene seleccionado el modo oscuro
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDarkMode) this.toggleDarkMode();
}

  toggleDarkMode() {
    const html = this.document.querySelector('html');

    this.isDarkMode = !this.isDarkMode;
    if(html){
    (this.isDarkMode ) ? 
    html.setAttribute('data-theme', 'dark'):
    html.setAttribute('data-theme', 'light');
  }
    }
  }
  

