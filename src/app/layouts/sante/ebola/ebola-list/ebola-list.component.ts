import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { EbolaService } from '../services/ebola.service';

@Component({
  selector: 'app-ebola-list',
  templateUrl: './ebola-list.component.html',
  styleUrls: ['./ebola-list.component.scss']
})
export class EbolaListComponent implements OnInit {

  displayedColumns: string[] = ["Created", "EtatFinancementStructureSanitaire", "AccesbiliteStructureSantairePopulation", "Province",  "edit", "remove"];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private ebolaService: EbolaService, private router: Router) {}

  ngOnInit() {
    this.ebolaService.getEbolaByAgent().subscribe(
      list => {
          const products = list.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          }
        });
        // console.log(products)
        this.dataSource = new MatTableDataSource(products);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    })
  }

  addProductClick(){
    this.router.navigate(['/layouts/sante/ebola/ebola-add']);
  }

  removeProduct(id){
    this.ebolaService.removeEbolaByID(id);
  }

}
