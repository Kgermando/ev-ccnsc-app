import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

import { Person } from '../models/user';
import { Roles, Entities } from '../models/enum';
import { QueryService } from '../auth/query.service';

@Injectable({
	providedIn: 'root'
})
export class SecurityService {
	constructor(private query: QueryService) {}

	checkAuthorization(user: Person, isRoleValid: string): boolean {
		if (!user) return false;
		else if (user.role == isRoleValid) {
			return true;
		}

		return false;
	}
 
	matchAdmin(user: Person): boolean {
		return this.checkAuthorization(user, Roles.Admin);
	}
	matchAgent(user: Person): boolean {
		return this.checkAuthorization(user, Roles.Agent);
	}
	matchUser(user: Person): boolean {
		return this.checkAuthorization(user, Roles.User);
	}

	
	isAdmin(): Observable<boolean> {
		return new Observable((observer) => {
			this.query
				.getLoggedInUserID()
				.pipe(
					switchMap((res) => {
						return this.query.getSingleData(Entities.Person, res);
					})
				)
				.pipe(first())
				.subscribe((res2) => {
					let result = this.matchAdmin(res2);
					observer.next(result);
				}),
				(err) => observer.error(err),
				() => observer.complete();
		});
	}


	isUser(): Observable<boolean> {
		return new Observable((observer) => {
			this.query
				.getLoggedInUserID()
				.pipe(
					switchMap((res) => {
						return this.query.getSingleData(Entities.Person, res);
					})
				)
				.pipe(first())
				.subscribe((res2) => {
					let result = this.matchUser(res2);
					observer.next(result);
				}),
				(err) => observer.error(err),
				() => observer.complete();
		});
	}


	isAgent(): Observable<boolean> {
		return new Observable((observer) => {
			this.query
				.getLoggedInUserID()
				.pipe(
					switchMap((res) => {
						return this.query.getSingleData(Entities.Person, res);
					})
				)
				.pipe(first())
				.subscribe((res2) => {
					let result = this.matchAgent(res2);
					observer.next(result);
				}),
				(err) => observer.error(err),
				() => observer.complete();
		});
	}

	getRole():Observable<any>{
		return new Observable(obs=>{
			this.query
				.getLoggedInUserID()
				.pipe(
					switchMap((res) => {
						return this.query.getSingleData(Entities.Person, res);
					})
				)
				.pipe(first())
				.subscribe((res2) => {
					obs.next(res2.role);
				}),
				(err) => obs.error(err),
				() => obs.complete();
		})
	}
}
