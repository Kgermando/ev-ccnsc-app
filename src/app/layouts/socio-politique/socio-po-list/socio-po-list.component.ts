import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SocioPService } from '../services/socio-p.service';

@Component({
  selector: 'app-socio-po-list',
  templateUrl: './socio-po-list.component.html',
  styleUrls: ['./socio-po-list.component.scss']
})
export class SocioPoListComponent implements OnInit {

  displayedColumns: string[] = ['Created', 'EnseignantMP', 'EnseignantMNP', 'NbreEcole', 'RevendicationPR', 'edit', 'remove'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private socioPService: SocioPService, private router: Router) {}

  ngOnInit() {
    this.socioPService.getSocioPByAgent().subscribe(
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
    this.router.navigate(['/layouts/socio-politique/socio-p-add']);
  }

  removeProduct(id){
    this.socioPService.removeSocioPByID(id);
  }

}
