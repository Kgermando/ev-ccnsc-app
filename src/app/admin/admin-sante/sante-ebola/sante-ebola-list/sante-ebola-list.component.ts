import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { EbolaService } from 'src/app/layouts/sante/ebola/services/ebola.service';

@Component({
  selector: 'app-sante-ebola-list',
  templateUrl: './sante-ebola-list.component.html',
  styleUrls: ['./sante-ebola-list.component.scss']
})
export class SanteEbolaListComponent implements OnInit {

  displayedColumns: string[] = ['Created', 'EtatFinancementStructureSanitaire', 'AccesbiliteStructureSantairePopulation', 'Province',  'edit', 'remove'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private ebolaService: EbolaService) {}

  ngOnInit() {
    this.ebolaService.getAllEbola().subscribe(
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
    this.ebolaService.removeEbolaByID(id);
  }

}
