import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-env-list',
  templateUrl: './env-list.component.html',
  styleUrls: ['./env-list.component.scss']
})
export class EnvListComponent implements OnInit {

  displayedColumns: string[] = ['Created', 'CalamiteNaturelRecente', 'AirProtege',   'edit', 'remove'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private envService: EnvService, private router: Router) {}

  ngOnInit(): void {
    this.envService.getEnvironementByAgent().subscribe(
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
    this.router.navigate(['/layouts/environnement/env-add']);
  }

  removeProduct(id){
    this.envService.removeEnvironementByID(id);
  }

}
