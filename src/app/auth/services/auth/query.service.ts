import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private angularfireauth: AngularFireAuth, private angularfirestore: AngularFirestore) { }

  getLoggedInUserID(): Observable<any> {
		return new Observable((observer) => {
			this.angularfireauth.authState.pipe(first()).subscribe(
				(res) => {
					observer.next(res && res.uid ? res.uid : null);
				},
				(err) => observer.error(err),
				() => observer.complete()
			);
		});
	}

	getSingleData(collectionName: string, documentId:string): Observable<any> {
		return new Observable((observer) => {
			this.angularfirestore.collection(collectionName).doc(documentId).get().pipe(first()).subscribe(
				(res) => {
					observer.next(res.data()?res.data():null);
				},
				(err) => observer.error(err),
				() => observer.complete()
			);
		});
	}
}
