import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] // FormsModule ve CommonModule'ü buraya ekleyin
})
export class WeatherComponent {
  city: string = '';
  weather: any = null;

  constructor(private weatherService: WeatherService, private formsModule : FormsModule) {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      (response) => {
        this.weather = response;
        this.weather.main.temp = (this.weather.main.temp - 273.15).toFixed(2); // Kelvin to Celsius
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
