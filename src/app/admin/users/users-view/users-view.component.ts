import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jsPDF from 'jspdf';
import { PersonService } from '../services/user.service';
import { Person } from 'src/app/auth/services/models/user';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit {

  user: Person = {
    email: '',
    name: '',
    phoneNumber: '',
    photoURL: '',
    role: null,
    uid: '',
    useraddress: '',
    etatCivile: '',
  };

  loading = false;
  constructor(private route: ActivatedRoute,
              private content: ElementRef,
              private userService: PersonService) {}

    downloadPDF() {
      console.log('Download here');
      const report = new jsPDF();
  
      const specialElementHeaders = {
        '#editor'(element , renderer) {
          return true;
        }
      };
      const content = this.content.nativeElement;
      report.fromHTML(content.innerHTML, 15, 15, {
        width: 150,
        elementHeaders: specialElementHeaders
      });
      report.save('User.pdf');
    }
  
    ngOnInit(): void {
      const id: string = this.route.snapshot.params.id;
      this.getDetails(id);
    }
  
    getDetails(id: string): void {
      this.loading = true;
      this.userService.getOnePerson(id).subscribe(user => {
        this.user = user;
        this.loading = false;
      });
    }


}
