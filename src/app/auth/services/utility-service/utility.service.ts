import { Injectable } from '@angular/core';
// import { _foreach as foreach} from 'lodash'
import * as _ from 'lodash';
import { FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { ErrorStateMatcher } from '@angular/material/core';
import * as firebase from 'firebase';
@Injectable({
	providedIn: 'root'
})
export class UtilityService {
	constructor(private angularfireauth:AngularFireAuth) {}

	getFormControlsValueFromFormGroup(fg: FormGroup) {
		let controls = [];
		_.forEach(Object.keys(fg.controls), function(value: string, key: string) {
			controls = [ ...controls, value ];
		});
		return controls;
	}


	touchAllFieldsOfForm(formgroup:FormGroup){
		let fields=this.getFormControlsValueFromFormGroup(formgroup);
		_.forEach(fields, (value, key) => {
			formgroup.controls[value].markAsTouched();
		});
	}

	resendVerificationEmail(){
		firebase.auth().currentUser.sendEmailVerification();

	}
	checkIfExists(val,array) {
		return array.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(val.toLowerCase()) !== -1);
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
