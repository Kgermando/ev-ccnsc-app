import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SecurityService } from 'src/app/auth/services/guard/security.service';
import { CustomerUserInformation } from 'src/app/auth/services/models/user';
import { SecureService } from '../services/secure.service';
import { Secure } from '../services/models/secure';

@Component({
  selector: 'app-secure-view',
  templateUrl: './secure-view.component.html',
  styleUrls: ['./secure-view.component.scss']
})
export class SecureViewComponent implements OnInit {

  secureData: Secure;
  SecureView: Secure = {};
  agentInfo: CustomerUserInformation;

  currentRole;
  userID;

  loading = false;

	constructor(
		private route: ActivatedRoute,
		private secureService: SecureService,
		private security: SecurityService
	) {
		let SecureViewId = this.route.snapshot.paramMap.get('id');
    	this.getDetails(SecureViewId);
	}

	ngOnInit() {
		this.setRole();
	}

	setRole() {
		this.security.getRole().subscribe((role) => {
			this.currentRole = role;
			// console.log(role);
		});
	}

	getSecureViewby(secureId) {
		this.loading = true;

		this.secureService.getSecureBySecureId(secureId).subscribe((item) => {
        this.secureData = item;
        
				this.secureService.getProfileByAgentId(item.data.agentId).subscribe(
					(res) => {
						this.agentInfo = res.data;
						this.loading = false;

						// console.log(res);
					},
					(err) => {
						this.loading = false;
					}
				);
			},
			(err) => {
				this.loading = false;
			}
		);
  }

  getDetails(id: string): void {
    this.loading = true;
    this.secureService.getOneProduct(id).subscribe(secure => {
      this.SecureView = secure;
      this.secureService.getProfileByAgentId(secure.agentId).subscribe(
        (res) => {
          this.agentInfo = res.data;
          this.loading = false;

          // console.log(res);
        },
        (err) => {
          this.loading = false;
        }
      );
      this.loading = false;
    });
  }

}
