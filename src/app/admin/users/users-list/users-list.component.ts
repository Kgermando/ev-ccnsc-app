import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { Person } from 'src/app/auth/services/models/user';
import { PersonService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'etatCivile'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private authService: AuthService,
              private personService: PersonService,
              // private excelService: ExcelService,
              private router: Router) { }

  ngOnInit(): void {

    this.personService.getAllPerson().subscribe(
      list => {
          const persons = list.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          }
        });
        // console.log(products)
          this.dataSource = new MatTableDataSource(persons);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
    });
  }

  view(uid) {
    this.router.navigate(['/admin/users/users-view', uid]);
  }

}
