import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/layouts/sante/covid/services/covid.service';

@Component({
  selector: 'app-etat-financement-covid',
  templateUrl: './etat-financement-covid.component.html',
  styleUrls: ['./etat-financement-covid.component.scss']
})
export class EtatFinancementCovidComponent implements OnInit {

  data = [];
  covidData = [];
  options: any = {};

  constructor(private covidServices: CovidService) {
    this.covidServices.getAllCovid().subscribe(
      list => {
          const products = list.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
          this.processData(products);

          this.options = {
          backgroundColor: '#ffffff',
          color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: this.covidData, // Data for legende
            textStyle: {
              color: '#000000',
            },
          },
          series: [
            {
              name: 'Etat de financement des Structures Santaires',
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              data: this.covidData,  // Data Firestore
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: '#F0F0F0',
                },
              },
              label: {
                normal: {
                  textStyle: {
                    color: '#000000',
                  },
                },
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: '#000000',
                  },
                },
              },
            },
          ],
        };
    });
  }

  ngOnInit(): void {
  }

  processData(entries) {
    // Initialisation
    this.data = [];
    this.covidData = [];

    entries.forEach(element => {
      if (this.data[element.EtatFinancementStructureSanitaire]) {
        this.data[element.EtatFinancementStructureSanitaire] += 1;
      } else {
        this.data[element.EtatFinancementStructureSanitaire] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.covidData.push(singleentry);
      }
  }

  onChartInit($event) {
    console.log($event);
  }

}
