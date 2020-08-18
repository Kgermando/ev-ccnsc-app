import { Component, OnInit, ViewChild } from '@angular/core';
import { EcoService } from '../services/eco.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eco-list',
  templateUrl: './eco-list.component.html',
  styleUrls: ['./eco-list.component.scss']
})
export class EcoListComponent implements OnInit {

  displayedColumns: string[] = ['Created', 'TauxDeCHangeDollard', 'PrixDenreMais', 'PrixDenreRiz', 'PrixDenreHuileRouge', 'PrixDenreHuileJaune', 'PrixDuEssence', 'edit', 'remove'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private ecoService: EcoService, private router: Router) {}

  ngOnInit() {
    this.ecoService.getEconomieByAgent().subscribe(
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
    this.router.navigate(['/layouts/economie/eco-add']);
  }

  removeProduct(id){
    this.ecoService.removeEconomieByID(id);
  }

}
