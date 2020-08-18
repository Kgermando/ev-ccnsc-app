import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcoService } from '../services/eco.service';
import { SecurityService } from 'src/app/auth/services/guard/security.service';
import { CustomerUserInformation } from 'src/app/auth/services/models/user';
import { Economie } from '../services/models/economie';

@Component({
  selector: 'app-eco-view',
  templateUrl: './eco-view.component.html',
  styleUrls: ['./eco-view.component.scss']
})
export class EcoViewComponent implements OnInit {

  EconomieData: Economie;
  economieView: Economie = {};


	agentInfo: CustomerUserInformation;

	currentRole;
  userID;

  loading = false;

	constructor(
		private route: ActivatedRoute,
		private ecoService: EcoService,
		private security: SecurityService
	) {
		let economieId = this.route.snapshot.paramMap.get('id');
    this.getDetails(economieId);
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

	getEconomieby(economieId) {
		this.loading = true;

		this.ecoService.getEconomieByEconomieId(economieId).subscribe((item) => {
        this.EconomieData = item;

				this.ecoService.getProfileByAgentId(item.data.agentId).subscribe(
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
    this.ecoService.getOneProduct(id).subscribe(economie => {
      this.economieView = economie;
      this.ecoService.getProfileByAgentId(economie.agentId).subscribe(
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
