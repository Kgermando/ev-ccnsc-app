import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-covid-list',
  templateUrl: './covid-list.component.html',
  styleUrls: ['./covid-list.component.scss']
})
export class CovidListComponent implements OnInit {

  displayedColumns: string[] = ['Created', 'EtatFinancementStructureSanitaire', 'AccesbiliteStructureSantairePopulation', 'Province',  'edit', 'remove'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private convidService: CovidService, private router: Router) {}

  ngOnInit() {
    this.convidService.getCovidByAgent().subscribe(
      list => {
          const products = list.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
        // console.log(products)
          this.dataSource = new MatTableDataSource(products);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
    });
  }

  addProductClick(){
    this.router.navigate(['/layouts/sante/covid/covid-add']);
  }

  removeProduct(id){
    this.convidService.removeCovidByID(id);
  }

}
