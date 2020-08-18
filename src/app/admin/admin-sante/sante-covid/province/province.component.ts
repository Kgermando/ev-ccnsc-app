import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/layouts/sante/covid/services/covid.service';
import { provinceId } from 'src/app/shared/db/province-id';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent implements OnInit {

  results = [];
  resultsData = [];

  province = provinceId;
  options: any = {};
  dataset;

  constructor(private convidServices: CovidService) {
    this.convidServices.getAllCovid().subscribe(
      list => {
        const products = list.map(item => {
        return {
          NbreTotalContaminer: item.payload.doc.NbreTotalContaminer,
          // NbreTotalGueris: item.payload.doc.NbreTotalGueris,
          // NbreTotalDeces: item.payload.doc.NbreTotalDeces,
          ...item.payload.doc.data()
        };
      });
        // this.dataset = products;
        this.processData(products);

        this.options = {
            legend: {},
            tooltip: {},
            dataset: {
                dimensions: ['Province', 'NbreTotalContaminer', 'NbreTotalGueris', 'NbreTotalDeces',],
                source: products
            },
            xAxis: {type: 'category'},
            yAxis: {},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        };
    });
  }

  ngOnInit(): void {
  }

  processData(entries) {
    this.results = [];
    this.resultsData = [];

    entries.forEach(element => {
      if (this.results[element.Province]) {
        this.results[element.Province] += 1;
      } else {
        this.results[element.Province] = 1;
      }
    });

    // tslint:disable-next-line: forin
    for (const key in this.results) {
        const singleentry = {
          name: key,
          value: this.results[key]
        };
        this.resultsData.push(singleentry);
      }
  }

  // Triggers when forecast data for current city is received in CityDetailsComponent
  // this.cityForecastSubscription = this.weatherService.cityForecast$.subscribe(
  //   (forecast) => {
  //     // Clearing arrays so we don't stack data in the chart
  //     this.days = [];
  //     this.pchartData.tem = [];
  //     this.chartData.hum = [];
  //     this.chartData.wind = [];

  //     // We map the forecast data and place the values in our properties so the Chart can reach them
  //     forecast.forEach(
  //       (day) => {
  //         // converting a readable date for JS to work with
  //         const dateTime = new Date(Date.parse(day.dt_txt));

  //         // We'll apply Angular's DatePipe in order to retrieve easily the days names
  //         const dayName = this.datePipe.transform(dateTime, 'EEEE');

  //         // Filling the days array with the new days
  //         this.days.push(dayName);

  //         // Filling the data needed for the Chart
  //         this.chartData.temp.push(Math.round(day.main.temp));
  //         this.chartData.hum.push(Math.round(day.main.humidity));
  //         this.chartData.wind.push(Math.round(day.wind.speed));
  //       }
  //     );

  //     // Rendering the Chart
  //     this.renderChart();
  //   }
  // );


}
