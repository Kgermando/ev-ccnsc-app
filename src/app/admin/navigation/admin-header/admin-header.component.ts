import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  async signOut() {
    await this.afAuth.signOut()
    await localStorage.clear();
    await this.router.navigateByUrl("/fastsmart/auth")
  }
}
