import { Component, OnInit } from '@angular/core';
import { EbolaService } from 'src/app/layouts/sante/ebola/services/ebola.service';
import { Ebola } from 'src/app/layouts/sante/ebola/services/models/Ebola';

@Component({
  selector: 'app-ebola-province',
  templateUrl: './ebola-province.component.html',
  styleUrls: ['./ebola-province.component.scss']
})
export class EbolaProvinceComponent implements OnInit {

  results = [];
  resultsData = [];
  // resultsData = {
  //   Province : [],
  //   NbreTotalContaminer: [],
  //   NbreTotalGueris: [],
  //   NbreTotalDeces: [],
  // }

  // Province: string;
  // NbreTotalContaminer: number;
  // NbreTotalGueris: number;
  // NbreTotalDeces: number;

  option: any = {};

  constructor(private ebolaServices: EbolaService) {
    this.ebolaServices.getAllEbola().subscribe(
      (list) => {
        const products = list.map(item => {
          return {
            id: item.payload.doc.id,
            // Province: item.payload.doc.Province,
            // NbreTotalContaminer: item.payload.doc.NbreTotalContaminer,
            // NbreTotalGueris: item.payload.doc.NbreTotalGueris,
            // NbreTotalDeces: item.payload.doc.NbreTotalDeces,
            ...item.payload.doc.data()
          }
        });
        // this.processData(products);
        this.option = {
          legend: {},
          tooltip: {},
          dataset: {
            source: this.processData(products)
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
      })
  }

  ngOnInit(): void {
  }



  processData(entries) {
    this.results = [];
    this.resultsData = [];

    entries.forEach(element => {

      // this.results[element.Province];
      // this.results[element.NbreTotalContaminer];
      // this.results[element.NbreTotalGueris];
      // this.results[element.NbreTotalDeces]; 

      if (this.results[element.Province]) {
        this.results[element.Province];
      } else {
        this.results[element.Province];
      }

      if (this.results[element.NbreTotalContaminer]) {
        this.results[element.NbreTotalContaminer += element.NbreTotalContaminer];
      } else {
        this.results[element.NbreTotalContaminer = element.NbreTotalContaminer];
      }

      if (this.results[element.NbreTotalGueris]) {
        this.results[element.NbreTotalGueris += element.NbreTotalGueris];
      } else {
        this.results[element.NbreTotalGueris = element.NbreTotalGueris];
      }

      if (this.results[element.NbreTotalDeces]) {
        this.results[element.NbreTotalDeces += element.NbreTotalDeces];
      } else {
        this.results[element.NbreTotalDeces = element.NbreTotalDeces];
      }

    });

    // tslint:disable-next-line: forin
    for (const key in this.results) {

        // const province = 'Province';
        const singleentry = {
          name: key,
          value: this.results[key]
        };

        // this.resultsData.push(province);
        this.resultsData.push(singleentry);
      }
  }

}
