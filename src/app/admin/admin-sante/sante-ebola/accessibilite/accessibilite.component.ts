import { Component, OnInit } from '@angular/core';
import { EbolaService } from 'src/app/layouts/sante/ebola/services/ebola.service';

@Component({
  selector: 'app-accessibilite',
  templateUrl: './accessibilite.component.html',
  styleUrls: ['./accessibilite.component.scss']
})
export class AccessibiliteComponent implements OnInit {

  data = [];
  accessibiliteData = [];
  options: any = {};

  constructor(private ebolaServices: EbolaService) {
    this.ebolaServices.getAllEbola().subscribe(
      list => {
          const products = list.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
          this.processDataEtat(products);

          this.options = {
            backgroundColor: '#ffffff',
            color: ['#0078D7', '#B13138'],
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: this.accessibiliteData, // Data for legende
            textStyle: {
              color: '#000000',
            },
          },
          series: [
            {
              name: 'Accesbilité aux Structures Santaires par la Population',
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              data: this.accessibiliteData,  // Data Firestore
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

  processDataEtat(entries) {
    // Initialisation
    this.data = [];
    this.accessibiliteData = [];

    entries.forEach(element => {
      if (this.data[element.AccesbiliteStructureSantairePopulation]) {
        this.data[element.AccesbiliteStructureSantairePopulation] += 1;
      } else {
        this.data[element.AccesbiliteStructureSantairePopulation] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.accessibiliteData.push(singleentry);
      }
    }

    onChartInit($event) {
      console.log($event);
    }

}
