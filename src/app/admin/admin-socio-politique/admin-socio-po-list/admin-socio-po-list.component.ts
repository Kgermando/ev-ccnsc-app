import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SocioPService } from 'src/app/layouts/socio-politique/services/socio-p.service';

@Component({
  selector: 'app-admin-socio-po-list',
  templateUrl: './admin-socio-po-list.component.html',
  styleUrls: ['./admin-socio-po-list.component.scss']
})
export class AdminSocioPoListComponent implements OnInit {

  displayedColumns: string[] = ['Created', 'EnseignantMP', 'EnseignantMNP', 'NbreEcole', 'RevendicationPR', 'Province', 'edit', 'remove'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private socioPService: SocioPService) {}

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeProduct(id){
    this.socioPService.removeSocioPByID(id);
  }

}
