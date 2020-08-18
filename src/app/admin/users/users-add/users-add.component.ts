import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { Subject } from "rxjs";
import * as _ from "lodash";
import { MatSnackBar } from '@angular/material/snack-bar';
import { RolesView } from 'src/app/auth/services/models/enum';
import { UserInformation } from 'src/app/auth/services/models/user';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { ErrorStateMatcherForsignUppage } from 'src/app/auth/services/utility-service/utility.service';
import { signupErrorCodes } from 'src/app/auth/services/constants/ccnscConstants';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {
  signupform: FormGroup;
  roles = RolesView;
  userInformation: UserInformation;
  verificationEmailsent = 'L\'email de vérification a été envoyé';
  isLoading: boolean = false;
  matcher;
  _unsubscribeAll: Subject<any>;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.makingSignupForm();
    this.setCustomValidation();
  }
  setCustomValidation() {
    this.signupform.updateValueAndValidity();
    this.matcher = new ErrorStateMatcherForsignUppage();
  }
  makingSignupForm() {
    this.signupform = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      phone: ["", Validators.required],
      role: ["", Validators.required],
      useraddress: ["", Validators.required]
    });
  }

  onSubmit() {
    if (this.signupform.valid) {
      this.isLoading = true;
      this.userInformation = {
        email: this.signupform.value.email,
        password: this.signupform.value.password,
        name: this.signupform.value.name,
        metaData: {
          name: this.signupform.value.name,
          email: this.signupform.value.email,
          role: this.signupform.value.role,
          phoneNumber: this.signupform.value.phone,
          useraddress: this.signupform.value.useraddress
        }
      };
      this.registerUser(this.userInformation);
    } else {
      this.authenticationService.touchAllfields(this.signupform);
    }
  }

  registerUser(user: UserInformation) {
    this.authenticationService
      .signUp(user)
      .pipe(first())
      .subscribe(res => {
        if (res && res.code) {
          _.forEach(signupErrorCodes, (value, key) => {
            if (res.code == value.code) {
              this.openErrorBar();
            }
          });
        } else {
          this.openVerificationBar();
          // this.routeToSignin();
          this.routeToHome();
        }
        this.isLoading = false;
      });
  }

  openVerificationBar() {
    this.snackbar.open('Enregistrement Reussie!', '', {
      duration: 3000
    });
  }

  openErrorBar() {
    this.snackbar.open('Erreur d\'enregistrement!', '', {
      duration: 3000
    });
  }

  routeToSignin() {
    this.router.navigate(['/auth/login']);
  }

  routeToHome() {
    this.router.navigate(['/layouts/home']);
  }
  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
    this._unsubscribeAll.unsubscribe();
  }

}
