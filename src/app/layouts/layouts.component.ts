import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth/auth.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  loggedIn$: Observable<boolean>;
  loggedOut$: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth,
              public authService: AuthService,
              private router: Router,
              ) { }

  async ngOnInit() {

    this.loggedIn$ = this.afAuth.authState.pipe(
      map(user => !!user)
    );
    this.loggedOut$ = this.loggedIn$.pipe(
      map(loggedIn => !loggedIn)
    );

  }

  async signOut() {
    await this.afAuth.signOut();
    await localStorage.clear();
    await this.router.navigateByUrl('/auth/login');
  }
}
