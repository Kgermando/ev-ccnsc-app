import { Component } from '@angular/core';
import { SocioPService } from 'src/app/layouts/socio-politique/services/socio-p.service';

@Component({
  selector: 'app-admin-socio-po-home',
  templateUrl: './admin-socio-po-home.component.html',
  styleUrls: ['./admin-socio-po-home.component.scss']
})
export class AdminSocioPoHomeComponent {

  data = [];
  socioPData = [];
  socioPData1 = [];
  socioPData2 = [];
  socioPData3 = [];
  socioPData4 = [];
  socioPData5 = [];
  socioPData6 = [];
  socioPData7 = [];
  socioPData8 = [];
  socioPData9 = [];
  socioPData10 = [];
  socioPData11 = [];

  options: any = {};
  options1: any = {};
  options2: any = {};
  options3: any = {};
  options4: any = {};
  options5: any = {};
  options6: any = {};
  options7: any = {};
  options8: any = {};
  options9: any = {};
  options10: any = {};
  options11: any = {};

  constructor(private convidServices: SocioPService) {
    this.convidServices.getAllSocioP().subscribe(
      list => {
          const products = list.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
          this.processData(products);
          this.processData1(products);
          this.processData2(products);
          this.processData3(products);
          this.processData4(products);
          this.processData5(products);
          this.processData6(products);
          this.processData7(products);
          this.processData8(products);
          this.processData9(products);
          this.processData10(products);
          this.processData11(products);

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
            data: this.socioPData, // Data for legende
            textStyle: {
              color: '#000000',
            },
          },
          series: [
            {
              name: 'Revendication',
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              data: this.socioPData,  // Data Firestore
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

          this.options1 = {
          backgroundColor: '#ffffff',
          color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: this.socioPData1, // Data for legende
            textStyle: {
              color: '#000000',
            },
          },
          series: [
            {
              name: 'Population Recour Medecin Traditionnel',
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              data: this.socioPData1,  // Data Firestore
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

          this.options2 = {
            backgroundColor: '#ffffff',
            color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: this.socioPData2, // Data for legende
            textStyle: {
              color: '#000000',
            },
          },
          series: [
            {
              name: 'Jeune Acces aux Structures Sanitaire',
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              data: this.socioPData2,  // Data Firestore
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

        this.options3 = {
          backgroundColor: '#ffffff',
          color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.socioPData3, // Data for legende
          textStyle: {
            color: '#000000',
          },
        },
        series: [
          {
            name: 'Frais de Fonctionnement des Ecoles',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.socioPData3,  // Data Firestore
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

        this.options4 = {
          backgroundColor: '#ffffff',
          color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.socioPData4, // Data for legende
          textStyle: {
            color: '#000000',
          },
        },
        series: [
          {
            name: 'Relation Assemblée et Gouv Prov',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.socioPData4,  // Data Firestore
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

        this.options5 = {
          backgroundColor: '#ffffff',
          color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.socioPData5, // Data for legende
          textStyle: {
            color: '#000000',
          },
        },
        series: [
          {
            name: 'Relation Gouvernement et Organe Judiciare',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.socioPData5,  // Data Firestore
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

        this.options6 = {
          backgroundColor: '#ffffff',
          color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.socioPData6, // Data for legende
          textStyle: {
            color: '#000000',
          },
        },
        series: [
          {
            name: 'Relation Assembléé et Pouvoir Judiciaire',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.socioPData6,  // Data Firestore
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

        this.options7 = {
          backgroundColor: '#ffffff',
          color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.socioPData7, // Data for legende
          textStyle: {
            color: '#000000',
          },
        },
        series: [
          {
            name: 'Relation Entre ETD et ETD',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.socioPData7,  // Data Firestore
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

        this.options8 = {
          backgroundColor: '#ffffff',
          color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.socioPData8, // Data for legende
          textStyle: {
            color: '#000000',
          },
        },
        series: [
          {
            name: 'Relation entre Autorité Et Societé Civile',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.socioPData8,  // Data Firestore
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

        this.options9 = {
          backgroundColor: '#ffffff',
          color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.socioPData9, // Data for legende
          textStyle: {
            color: '#000000',
          },
        },
        series: [
          {
            name: 'Relation entre Officiel Et Media',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.socioPData9,  // Data Firestore
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

        this.options10 = {
          backgroundColor: '#ffffff',
          color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.socioPData10, // Data for legende
          textStyle: {
            color: '#000000',
          },
        },
        series: [
          {
            name: 'Programme de Développement',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.socioPData10,  // Data Firestore
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

        this.options11 = {
          backgroundColor: '#ffffff',
          color: ['#0078D7', '#B13138', '#FFCB2E', '#FF4081', '#439842', '#49326D'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.socioPData11, // Data for legende
          textStyle: {
            color: '#000000',
          },
        },
        series: [
          {
            name: 'Budget participatif',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.socioPData11,  // Data Firestore
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

  processData(entries) {
    // Initialisation
    this.data = [];
    this.socioPData = [];

    entries.forEach(element => {
      if (this.data[element.Revendication]) {
        this.data[element.Revendication] += 1;
      } else {
        this.data[element.Revendication] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData.push(singleentry);
      }
  }

  processData1(entries) {
    // Initialisation
    this.data = [];
    this.socioPData1 = [];

    entries.forEach(element => {
      if (this.data[element.PopulationRecourMedecinTraditionnel]) {
        this.data[element.PopulationRecourMedecinTraditionnel] += 1;
      } else {
        this.data[element.PopulationRecourMedecinTraditionnel] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData1.push(singleentry);
      }
  }

  processData2(entries) {
    // Initialisation
    this.data = [];
    this.socioPData2 = [];

    entries.forEach(element => {
      if (this.data[element.JeuneAccesStructureSanitaire]) {
        this.data[element.JeuneAccesStructureSanitaire] += 1;
      } else {
        this.data[element.JeuneAccesStructureSanitaire] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData2.push(singleentry);
      }
  }

  processData3(entries) {
    // Initialisation
    this.data = [];
    this.socioPData3 = [];

    entries.forEach(element => {
      if (this.data[element.FraisFonctionnementEcole]) {
        this.data[element.FraisFonctionnementEcole] += 1;
      } else {
        this.data[element.FraisFonctionnementEcole] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData3.push(singleentry);
      }
  }

  processData4(entries) {
    // Initialisation
    this.data = [];
    this.socioPData4 = [];

    entries.forEach(element => {
      if (this.data[element.RelationAssembleGouvProv]) {
        this.data[element.RelationAssembleGouvProv] += 1;
      } else {
        this.data[element.RelationAssembleGouvProv] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData4.push(singleentry);
      }
  }

  processData5(entries) {
    // Initialisation
    this.data = [];
    this.socioPData5 = [];

    entries.forEach(element => {
      if (this.data[element.RelationGouvernementOrganeJudiciare]) {
        this.data[element.RelationGouvernementOrganeJudiciare] += 1;
      } else {
        this.data[element.RelationGouvernementOrganeJudiciare] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData5.push(singleentry);
      }
  }

  processData6(entries) {
    // Initialisation
    this.data = [];
    this.socioPData6 = [];

    entries.forEach(element => {
      if (this.data[element.RelationAssemblePouvoirJudiciaire]) {
        this.data[element.RelationAssemblePouvoirJudiciaire] += 1;
      } else {
        this.data[element.RelationAssemblePouvoirJudiciaire] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData6.push(singleentry);
      }
  }

  processData7(entries) {
    // Initialisation
    this.data = [];
    this.socioPData7 = [];

    entries.forEach(element => {
      if (this.data[element.RelationEntreETDETD]) {
        this.data[element.RelationEntreETDETD] += 1;
      } else {
        this.data[element.RelationEntreETDETD] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData7.push(singleentry);
      }
  }

  processData8(entries) {
    // Initialisation
    this.data = [];
    this.socioPData8 = [];

    entries.forEach(element => {
      if (this.data[element.RelationAutoriteEtSocieteCivile]) {
        this.data[element.RelationAutoriteEtSocieteCivile] += 1;
      } else {
        this.data[element.RelationAutoriteEtSocieteCivile] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData8.push(singleentry);
      }
  }

  processData9(entries) {
    // Initialisation
    this.data = [];
    this.socioPData9 = [];

    entries.forEach(element => {
      if (this.data[element.RelationOfficielEtMedia]) {
        this.data[element.RelationOfficielEtMedia] += 1;
      } else {
        this.data[element.RelationOfficielEtMedia] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData9.push(singleentry);
      }
  }

  processData10(entries) {
    // Initialisation
    this.data = [];
    this.socioPData10 = [];

    entries.forEach(element => {
      if (this.data[element.ProgrammeDev]) {
        this.data[element.ProgrammeDev] += 1;
      } else {
        this.data[element.ProgrammeDev] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData10.push(singleentry);
      }
  }

  processData11(entries) {
    // Initialisation
    this.data = [];
    this.socioPData11 = [];

    entries.forEach(element => {
      if (this.data[element.Budgetpart]) {
        this.data[element.Budgetpart] += 1;
      } else {
        this.data[element.Budgetpart] = 1;
      }
    });
    // tslint:disable-next-line: forin
    for (const key in this.data) {
        const singleentry = {
          name: key,
          value: this.data[key]
        };
        this.socioPData11.push(singleentry);
      }
  }

  onChartInit($event) {
    console.log($event);
  }

}
