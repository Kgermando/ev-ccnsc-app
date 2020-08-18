import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SecureService } from '../services/secure.service';

@Component({
  selector: 'app-secure-list',
  templateUrl: './secure-list.component.html',
  styleUrls: ['./secure-list.component.scss']
})
export class SecureListComponent implements OnInit {

  displayedColumns: string[] = ['Created', 'IdentificationZoneTension', 'ViolViolenceSexuel', 'InitiavesPaixImplique',  'edit', 'remove'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private secureService: SecureService, private router: Router) {}

  ngOnInit(): void {
    this.secureService.getSecureByAgent().subscribe(
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
    this.router.navigate(['/layouts/securitaire/secure-add']);
  }

  removeProduct(id){
    this.secureService.removeSecureByID(id);
  }

}
