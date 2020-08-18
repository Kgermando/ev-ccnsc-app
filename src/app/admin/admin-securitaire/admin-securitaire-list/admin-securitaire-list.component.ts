import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SecureService } from 'src/app/layouts/securitaire/services/secure.service';

@Component({
  selector: 'app-admin-securitaire-list',
  templateUrl: './admin-securitaire-list.component.html',
  styleUrls: ['./admin-securitaire-list.component.scss']
})
export class AdminSecuritaireListComponent implements OnInit {

  displayedColumns: string[] = ['Created', 'IdentificationZoneTension', 'ViolViolenceSexuel', 'InitiavesPaixImplique', 'Province',  'edit', 'remove'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private secureService: SecureService) {}

  ngOnInit() {
    this.secureService.getAllSecure().subscribe(
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
    this.secureService.removeSecureByID(id);
  }


}
