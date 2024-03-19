import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient, private formsModule: FormsModule) { }

  getWeather(city: string) {
    const apiKey = '20f8f31b3f0ce454d01fe8200ac3d921';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    return this.http.get(url);
  }
}
