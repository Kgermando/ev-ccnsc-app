import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { SecurityService } from 'src/app/auth/services/guard/security.service';
import { MatDialog } from '@angular/material/dialog';
import { DashboardService } from '../services/dashboard.service';
import { ProfileService } from '../services/profile.service';
import { RequestPasswordComponent } from 'src/app/auth/request-password/request-password.component';
import { CustomerUserInformation } from 'src/app/auth/services/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userInfo: CustomerUserInformation;
  role;
  
  data;
 
  constructor(
              private customerService: DashboardService,
              private router: Router,
              public authService: AuthService,
              // private profileService: ProfileService, 
              private sec:SecurityService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.customerService.getUserInfo().subscribe(res => {
      
      this.userInfo = res.data;
      // console.log(this.userInfo);
    })
    this.sec.getRole().subscribe(res => {
      this.role = res;
    })
  }

  private openPasswordChangeModal(width?: string) {
		const dialogRef = this.dialog.open(RequestPasswordComponent, {
			minWidth:'450px',
			width: width ? width : '35vw'
			// height:'60vh'
    });

    dialogRef.afterClosed().subscribe(result => {
		   console.log('The dialog was closed',result);
		});
    
  }

  routeToUpdateProfile(){
    this.router.navigate(['/layouts/dashboard/profile-update']);
  }

  openChangePasswordModal() {
		this.openPasswordChangeModal();
	}

}
