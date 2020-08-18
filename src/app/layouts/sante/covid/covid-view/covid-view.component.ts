import { Component, OnInit } from '@angular/core';
import { Covid } from '../services/models/covid';
import { CustomerUserInformation } from 'src/app/auth/services/models/user';
import { ActivatedRoute } from '@angular/router';
import { CovidService } from '../services/covid.service';
import { SecurityService } from 'src/app/auth/services/guard/security.service';

@Component({
  selector: 'app-covid-view',
  templateUrl: './covid-view.component.html',
  styleUrls: ['./covid-view.component.scss']
})
export class CovidViewComponent implements OnInit {

  covidData: Covid;
  covidView: Covid = {};
  agentInfo: CustomerUserInformation;

  currentRole;	
  userID;
  
  loading = false;

	constructor(
		private route: ActivatedRoute,
		private covidService: CovidService,
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

	getcovidViewby(covidId) {
		this.loading = true;

		this.covidService.getCovidByCovidId(covidId).subscribe((item) => {
        this.covidData = item;
        
				this.covidService.getProfileByAgentId(item.data.agentId).subscribe(
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
    this.covidService.getOneProduct(id).subscribe((item) => {
      this.covidView = item;
      this.covidService.getProfileByAgentId(item.agentId).subscribe(
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
