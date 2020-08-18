import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CovidService } from 'src/app/layouts/sante/covid/services/covid.service';

@Component({
  selector: 'app-sante-covid-list',
  templateUrl: './sante-covid-list.component.html',
  styleUrls: ['./sante-covid-list.component.scss']
})
export class SanteCovidListComponent implements OnInit {

  displayedColumns: string[] = ['Created', 'EtatFinancementStructureSanitaire', 'AccesbiliteStructureSantairePopulation', 'Province',  'edit', 'remove'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private convidService: CovidService) {}

  ngOnInit() {
    this.convidService.getAllCovid().subscribe(
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeProduct(id){
    this.convidService.removeCovidByID(id);
  }

}
