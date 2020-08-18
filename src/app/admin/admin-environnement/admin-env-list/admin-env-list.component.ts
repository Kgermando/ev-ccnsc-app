import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EnvService } from 'src/app/layouts/environnement/services/env.service';

@Component({
  selector: 'app-admin-env-list',
  templateUrl: './admin-env-list.component.html',
  styleUrls: ['./admin-env-list.component.scss']
})
export class AdminEnvListComponent implements OnInit {

  displayedColumns: string[] = ['Created', 'CalamiteNaturelRecente', 'AirProtege', 'Province',  'edit', 'remove'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private envService: EnvService) {}

  ngOnInit() {
    this.envService.getAllEnvironement().subscribe(
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
    this.envService.removeEnvironementByID(id);
  }


}
