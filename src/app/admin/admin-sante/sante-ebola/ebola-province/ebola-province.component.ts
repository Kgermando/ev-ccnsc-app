import { Component, OnInit } from '@angular/core';
import { EbolaService } from 'src/app/layouts/sante/ebola/services/ebola.service';
import { Ebola } from 'src/app/layouts/sante/ebola/services/models/Ebola';
import { provinceId } from 'src/app/shared/db/province-id';

@Component({
  selector: 'app-ebola-province',
  templateUrl: './ebola-province.component.html',
  styleUrls: ['./ebola-province.component.scss']
})
export class EbolaProvinceComponent implements OnInit {

  results = [];
  resultsData = [];

  province = provinceId;
  options: any = {};
  dataset;

  constructor(private ebolaServices: EbolaService) {
    this.ebolaServices.getAllEbola().subscribe(
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
                dimensions: ['Province', 'NbreTotalContamine', 'NbreTotalGueris', 'NbreTotalDeces',],
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

}
