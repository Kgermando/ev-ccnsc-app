import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/layouts/sante/covid/services/covid.service';
import { Covid } from 'src/app/layouts/sante/covid/services/models/covid';
import { reduce, filter, map } from 'rxjs/operators';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

const storageService = function (){
  return window.localStorage;
}

@Component({
  selector: 'app-contamine-nouveau',
  templateUrl: './contamine-nouveau.component.html',
  styleUrls: ['./contamine-nouveau.component.scss']
})
export class ContamineNouveauComponent implements OnInit {

  data;

  totalContamine = 0;
  totalGueris = 0;
  totalDeces = 0;


  constructor(private convidServices: CovidService) {
    this.convidServices.getAllCovid().subscribe(
      list => {
          const products = list.map(item => {
          return {
            id: item.payload.doc.id,
            NbreTotalContamine: item.payload.doc.NbreTotalContamine,
            ...item.payload.doc.data()
          }
        });
        console.log(products);

        this.data = products.filter(co => co.NbreTotalContamine).map(item => item.NbreTotalContamine);
          this.totalContamine = this.data.reduce(this.reduceTotal);

        this.data = products.filter(co => co.NbreTotalGueris).map(item => item.NbreTotalGueris);
          this.totalGueris = this.data.reduce(this.reduceTotal);

        this.data = products.filter(co => co.NbreTotalDeces).map(item => item.NbreTotalDeces);
          this.totalDeces = this.data.reduce(this.reduceTotal);
    });

  }


  private reduceTotal(sum, num){
      return sum + num;   
  }

  ngOnInit(): void {
  }


  // processData(entries) {
  //   // Initialisation
  //   this.data = [];
  //   this.covidData = [];

  //   entries.forEach(element => {
  //     if (this.data[element.NbreTotalContamine]) {
  //       this.data[element.NbreTotalContamine] += this.data[element.NbreTotalContamine];
  //     } else {
  //       this.data[element.NbreTotalContamine] = this.data[element.NbreTotalContamine];
  //     }
  //   });
  //   // tslint:disable-next-line: forin
  //   for (const key in this.data) {
  //       const singleentry = {
  //         vavlue: this.data[key]
  //       };
  //       this.covidData.push(singleentry);
  //     }
  // }

}
