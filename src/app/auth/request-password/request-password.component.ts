import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfileService, ErrorStateMatcherForsignUppage } from 'src/app/dashboard/services/profile.service';

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestPasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
	passwordgroup: any = {};
	matcher;
	// errormessages = errorMessages;
	constructor(
		private fb: FormBuilder,
		private profileservice: ProfileService,
		public dialogRef: MatDialogRef<RequestPasswordComponent>
	) {}

	ngOnInit() {
		this.makePasswordChangeForm();
		// this.setCustomValidation();
		// this.getProfileInformation();
	}

	makePasswordChangeForm() {
		this.changePasswordForm = this.fb.group({
			oldpassword: [ '', [ Validators.required ] ],
			newpassword: [ '', [ Validators.required ] ],
			// confirmpassword: [ '', [ Validators.required ] ]
		});
	}

	onSubmit() {
		if (this.changePasswordForm.valid) {
			this.setPassword();
			this.updatePassword(this.passwordgroup);
		} else {
			this.updateFields();
		}
	}

	updateFields() {
		this.profileservice.touchAllfields(this.changePasswordForm);
	}

	setPassword() {
		this.passwordgroup.oldpassword = this.changePasswordForm.value.oldpassword;
		this.passwordgroup.newpassword = this.changePasswordForm.value.newpassword;
		// this.passwordgroup.confirmpassword = this.changePasswordForm.value.confirmpassword;
	}

	passwordMatchValidator(group: FormGroup): any {
		if (group) {
			if (group.get('newpassword').value !== group.get('confirmpassword').value) {
				return { notMatching: true };
			}
		}

		return null;
	}
	setCustomValidation() {
		this.changePasswordForm.setValidators(this.passwordMatchValidator);
		this.changePasswordForm.updateValueAndValidity();
		this.matcher = new ErrorStateMatcherForsignUppage();
	}

	updatePassword(passwords) {
    this.profileservice.updatePassword(passwords.oldpassword, passwords.newpassword);
		this.dialogRef.close();
    
	}

	onNoClick(): void {
		this.dialogRef.close();
	}


}
