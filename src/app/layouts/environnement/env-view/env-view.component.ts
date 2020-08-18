import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SecurityService } from 'src/app/auth/services/guard/security.service';
import { CustomerUserInformation } from 'src/app/auth/services/models/user';
import { Environement } from '../services/models/environement';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-env-view',
  templateUrl: './env-view.component.html',
  styleUrls: ['./env-view.component.scss']
})
export class EnvViewComponent implements OnInit {

  environementData: Environement;
  environnemntView: Environement = {};

  agentInfo: CustomerUserInformation;

  currentRole;
  userID;

  loading = false;

	constructor(
		private route: ActivatedRoute,
		private envService: EnvService,
		private security: SecurityService
	) {
		let environnemntViewId = this.route.snapshot.paramMap.get('id');
    	this.getDetails(environnemntViewId);
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

	getEnvironnemntViewby(environementId) {
		this.loading = true;
		this.envService.getEnvironementByEnvironementId(environementId).subscribe((item) => {
        this.environementData = item;
        
				this.envService.getProfileByAgentId(item.data.agentId).subscribe(
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
    this.envService.getOneProduct(id).subscribe(environnemnt => {
      this.environnemntView = environnemnt;
      this.envService.getProfileByAgentId(environnemnt.agentId).subscribe(
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
