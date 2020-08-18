import { Component, OnInit } from '@angular/core';
import { EbolaService } from 'src/app/layouts/sante/ebola/services/ebola.service';

@Component({
  selector: 'app-etat-accessibilite',
  templateUrl: './etat-accessibilite.component.html',
  styleUrls: ['./etat-accessibilite.component.scss']
})
export class EtatAccessibiliteComponent implements OnInit {

  data = [];
  etatData = [];
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
            color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: this.etatData, // Data for legende
            textStyle: {
              color: '#000000',
            },
          },
          series: [
            {
              name: 'Etat de Financement des Structures Sanitaire',
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              data: this.etatData,  // Data Firestore
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
    this.etatData = [];

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
        this.etatData.push(singleentry);
      }
    }

    onChartInit($event) {
      console.log($event);
    }

}
