import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocioPService } from '../services/socio-p.service';
import { SecurityService } from 'src/app/auth/services/guard/security.service';
import { CustomerUserInformation } from 'src/app/auth/services/models/user';
import { SocioP } from '../services/models/socio-p';

@Component({
  selector: 'app-socio-view',
  templateUrl: './socio-view.component.html',
  styleUrls: ['./socio-view.component.scss']
})
export class SocioViewComponent implements OnInit {

  SocioPData: SocioP;
  socioPView: SocioP = {};


	agentInfo: CustomerUserInformation;

	currentRole;
  userID;

  loading = false;

	constructor(
		private route: ActivatedRoute,
		private envService: SocioPService,
		private security: SecurityService
	) {
		let socioPViewId = this.route.snapshot.paramMap.get('id');
    this.getDetails(socioPViewId);
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

	getsocioPViewby(SocioPId) {
		this.loading = true;

		this.envService.getSocioPBySocioPId(SocioPId).subscribe((item) => {
        this.SocioPData = item;

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
    this.envService.getOneProduct(id).subscribe(socioP => {
      this.socioPView = socioP;
      this.envService.getProfileByAgentId(socioP.agentId).subscribe(
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
