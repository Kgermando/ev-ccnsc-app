import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import * as _ from 'lodash';
import { UserInformation } from '../services/models/user';
import { AuthService } from '../services/auth/auth.service';
import { UtilityService } from '../services/utility-service/utility.service';
import { signinErrorCode } from '../services/constants/ccnscConstants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  isLoading = false;
  userInformation: UserInformation;
  signinform: FormGroup;

  constructor(
	private authenticationservice: AuthService,
	private fb: FormBuilder,
	private router: Router,
	private util: UtilityService,
	private snackbar: MatSnackBar
	) { }


	ngOnInit() {
		this.makingSignInForm();
	}
	
	makingSignInForm() {
		this.signinform = this.fb.group({
		email: [ '', [ Validators.required, Validators.email ] ],
		password: [ '', Validators.required ]
		});
	}

  	onSubmit() {
		if (this.signinform.valid) {
			this.isLoading = true;
			this.userInformation = {
				email: this.signinform.value.email,
				password: this.signinform.value.password
			};
			// setTimeout(()=>{
			// 	this.signinUser(this.userInformation);
			// }, 4000);
			this.signinUser(this.userInformation);
		}
	}

  	signinUser(user: UserInformation) {
		this.authenticationservice.signin(user).pipe(first()).subscribe((res) => {
			if (res && res.code) {
				console.log(res.code);
				this.validateSignIn(res.code);
				this.isLoading = false;
				this.openErrorBar();
			} else {
				console.log('Logged in');
				this.router.navigate(['/layouts/home']);
				// this.redictTo();
				this.isLoading = false;
				this.showSnackbar();
			}
		});
	  }
	  
	// redictTo() {
	// 	if (this.userInformation.role === 'admin') {
	// 		this.router.navigate(['/admin/stats']);
	// 	} else {
	// 		this.router.navigate(['/layouts/home']);
	// 	}
	// }

  validateSignIn(errorCode) {
		this.updateform();
		
		let errobj = {};
		errobj[errorCode] = true;
		if (errorCode === signinErrorCode['Wrong password'].code){
			this.signinform.controls.password.setErrors(errobj);
		}
		else{
			this.signinform.controls.email.setErrors(errobj);
		}
	}

	updateform() {
		let controlsvalues = this.util.getFormControlsValueFromFormGroup(this.signinform);
		_.forEach(controlsvalues, (value) => {
			this.signinform.get(value).markAsTouched();
		});
	}

	showSnackbar() {
		this.snackbar.open('Authentification Réussie!', '', {
		duration: 8000
		});
  	}

	openErrorBar() {
		this.snackbar.open('Echec d\'uthentification!', '', {
		duration: 6000
		});
	}

}
