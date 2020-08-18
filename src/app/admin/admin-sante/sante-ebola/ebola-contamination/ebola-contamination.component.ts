import { Component, OnInit } from '@angular/core';
import { EbolaService } from 'src/app/layouts/sante/ebola/services/ebola.service';

@Component({
  selector: 'app-ebola-contamination',
  templateUrl: './ebola-contamination.component.html',
  styleUrls: ['./ebola-contamination.component.scss']
})
export class EbolaContaminationComponent implements OnInit {

  data;

  totalContamine = 0;
  totalGueris = 0;
  totalDeces = 0;

  constructor(private ebolaServices: EbolaService) { 
    this.ebolaServices.getAllEbola().subscribe(
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

}
