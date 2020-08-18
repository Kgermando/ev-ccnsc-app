import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { EcoService } from 'src/app/layouts/economie/services/eco.service';

@Component({
  selector: 'app-admin-eco-list',
  templateUrl: './admin-eco-list.component.html',
  styleUrls: ['./admin-eco-list.component.scss']
})
export class AdminEcoListComponent implements OnInit {

  displayedColumns: string[] = ['Created', 'TauxDeCHangeDollard', 'PrixDenreMais', 'PrixDenreRiz', 'PrixDenreHuileRouge', 'PrixDuEssence', 'Province', 'edit', 'remove'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private ecoService: EcoService) {}

  ngOnInit() {
    this.ecoService.getAllEconomie().subscribe(
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
    this.ecoService.removeEconomieByID(id);
  }


}
