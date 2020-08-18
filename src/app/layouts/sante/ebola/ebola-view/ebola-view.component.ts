import { Component, OnInit } from '@angular/core';
import { Ebola } from '../services/models/Ebola';
import { CustomerUserInformation } from 'src/app/auth/services/models/user';
import { ActivatedRoute } from '@angular/router';
import { SecurityService } from 'src/app/auth/services/guard/security.service';
import { EbolaService } from '../services/ebola.service';

@Component({
  selector: 'app-ebola-view',
  templateUrl: './ebola-view.component.html',
  styleUrls: ['./ebola-view.component.scss']
})
export class EbolaViewComponent implements OnInit {

	ebolaData: Ebola;
	ebolaView: Ebola = {};
	agentInfo: CustomerUserInformation;

	currentRole;
	userID;

	loading = false;

	constructor(
		private route: ActivatedRoute,
		private ebolaService: EbolaService,
		private security: SecurityService
	) {

	}

	ngOnInit(): void {
		this.setRole();
		let covidViewId = this.route.snapshot.paramMap.get('id');
		// this.getcovidViewby(covidViewId);
		this.getDetails(covidViewId);
	}

	setRole() {
		this.security.getRole().subscribe((role) => {
			this.currentRole = role;
			// console.log(role);
		});
	}

	getcovidViewby(ebolaId) {
		this.loading = true;
		this.ebolaService.getEbolaByEbolaId(ebolaId).subscribe((item) => {
        	this.ebolaData = item;
			      this.ebolaService.getProfileByAgentId(item.data.agentId).subscribe(
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
		this.ebolaService.getOneProduct(id).subscribe((item) => {
		  this.ebolaView = item;
		  this.ebolaService.getProfileByAgentId(item.agentId).subscribe(
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
