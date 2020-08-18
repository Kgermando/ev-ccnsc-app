import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private afauth: AngularFireAuth,
              private snackbar: MatSnackBar,
              public dialog: MatDialog) { }

  // openPasswordChangeModal(width?: string) {
	// 	const dialogRef = this.dialog.open(PasswordChangeComponent, {
			
	// 		minWidth:'450px',
	// 		width: width ? width : '35vw'
	// 		// height:'60vh'
	// 	});

	// 	// dialogRef.afterClosed().subscribe(result => {
	// 	// console.log('The dialog was closed',result);
	// 	// });
	// }
  
  touchAllfields(formgroup: FormGroup) {
		this.touchAllFieldsOfForm(formgroup);
  }
  touchAllFieldsOfForm(formgroup:FormGroup){
		let fields=this.getFormControlsValueFromFormGroup(formgroup);
		_.forEach(fields, (value, key) => {
			formgroup.controls[value].markAsTouched();
		});
  }
  getFormControlsValueFromFormGroup(fg: FormGroup) {
		let controls = [];
		_.forEach(Object.keys(fg.controls), function(value: string, key: string) {
			controls = [ ...controls, value ];
		});
		return controls;
  }
  
  updatePassword(oldpassword: string, newpassword: string) {
		const currentEmail = firebase.auth().currentUser.email;
		this.afauth
			.signInWithEmailAndPassword(currentEmail, oldpassword)
			.then((res) => {
				if (res && res.user && res.user.emailVerified) {
					firebase.auth().currentUser.updatePassword(newpassword);
					// observer.next(errorMessages.password_updated);
					this.openUpdatedSnackBar();
				} else {
					// observer.next(errorMessages.verify_email);
					this.openErrorSnackBar('Verify Email');
					this.resendVerificationEmail();
				}
			})
			.catch((err) => {
				this.openErrorSnackBar('Failed. Wrong credential');
				// observer.next(err && err.code);
			});
  }


  openUpdatedSnackBar() {
    this.snackbar.open('Enregistrement Reussie!', '', {
      duration: 3000
    });
	}
	openErrorSnackBar(message?: string) {
    this.snackbar.open('Enregistrement Reussie!', '', {
      duration: 3000
    });
  }
  	resendVerificationEmail(){
      firebase.auth().currentUser.sendEmailVerification();
	  }

}
export class ErrorStateMatcherForsignUppage implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		//   const isSubmitted = form && form.submitted;
		//   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
		return (form.hasError('notMatching') && control.touched)
			? form.hasError('notMatching')
			: control && control.invalid && control.touched ? control.invalid : false;
	}
}
