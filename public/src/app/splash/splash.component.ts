import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  info : any;
  name: any;
  search: any;
  fahrenheit : any;
  celsius: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    this.name = {
      city : "",
    };

  }


  logIt(){
    this.search = this.name.city;
    let obs = this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.search + '&APPID=6a56ce57e344d20a72d820cd91371762');
    obs.subscribe(data => {
      console.log('success', data);
      this.info = data;
      this.celsius = Math.floor(this.info.main.temp - 273.15);
      this.fahrenheit = Math.floor(this.celsius * 1.8 + 32);
    });

  };


}