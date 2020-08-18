import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Covid } from './models/covid';
import { map } from 'rxjs/operators';
import { secteurList } from 'src/app/shared/db/province';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  userId: string;
  covidCollection: AngularFirestoreCollection<Covid>;
  covidInfo: Observable<Covid[]>;

  provinceId: string;

  province;

  // Pour la methode getOneProduct()
  private covidDoc: AngularFirestoreDocument<Covid>;
  public covidView: Observable<Covid>;

  constructor(
    private angularfireauth: AngularFireAuth,
    private angularfirestore: AngularFirestore
  ) {
    this.angularfireauth.authState.subscribe(user => {
      if (user) { this.userId = user.uid; }
    });

    this.covidCollection = angularfirestore.collection<Covid>('Covid');
    // this.covidCollection = angularfirestore.collection<Covid>("Covid", ref => ref.orderBy('Created', 'desc'));
    // this.province();
  }

  getUserId(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        observer.next(user.uid);
      });
    });
  }

  getProvince() {
    this.province = secteurList.find( name => {
      this.provinceId = name.name;
    });
  }

  createCovid(covidInfo) {
    this.covidCollection.add(covidInfo);
  }

  updateCovid(covidInfo, CovidId) {
    this.covidCollection.doc(CovidId).update(covidInfo);
  }

  getAllCovid(): Observable<any> {
    return new Observable(observer => {
          this.angularfirestore
            .collection<Covid>('Covid',
              ref => ref.orderBy('Created', 'desc'))
            .snapshotChanges()
            .subscribe(covid => {
              observer.next(covid);
            });
      });
  }

  getCovidByProvince(): Observable<any> {
    return new Observable(observer => {
          this.angularfirestore
            .collection<Covid>('Covid', ref =>
            ref.where('Province', '==', this.provinceId))
            .snapshotChanges()
            .subscribe(covid => {
              observer.next(covid);
            });
      });
  }

  getCovidByConfinementNews(): Observable<any> {
    return new Observable(observer => {
          this.angularfirestore
            .collection<Covid>('Covid', ref =>
            ref.where('NbreTotalContamine', '==', 'NbreTotalContamine'))
            .snapshotChanges()
            .subscribe(covid => {
              observer.next(covid);
            });
      });
  }

  getCovidByConfinementGueris(): Observable<any> {
    return new Observable(observer => {
          this.angularfirestore
            .collection<Covid>('Covid', ref =>
            ref.where('NbreTotalGueris', '==', 'NbreTotalGueris'))
            .snapshotChanges()
            .subscribe(covid => {
              observer.next(covid);
            });
      });
  }

  getCovidByConfinementDeces(): Observable<any> {
    return new Observable(observer => {
          this.angularfirestore
            .collection<Covid>('Covid', ref =>
            ref.where('NbreTotalDeces', '==', 'NbreTotalDeces'))
            .snapshotChanges()
            .subscribe(covid => {
              observer.next(covid);
            });
      });
  }

  getCovidByAgent(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid;
          this.angularfirestore
            .collection<Covid>('Covid', ref =>
              ref.where('agentId', '==', this.userId),
              // ref => ref.orderBy('Created', 'desc')
            )
            .snapshotChanges()
            .subscribe(covid => {
              observer.next(covid);
            });
        } else {
          observer.next(null);
        }
      });
    });
  }

  getProfileByAgentId(agentId): Observable<any> {
    return new Observable(observer => {
      this.angularfirestore
        .collection('Person')
        .doc(agentId)
        .snapshotChanges()
        .pipe(
          map(changes => {
            const data = changes.payload.data();
            const id = changes.payload.id;
            return { id, data };
          })
        ).subscribe(profile => {
          observer.next(profile);
        });
    });
  }

  removeCovidByID(id){
    this.angularfirestore.collection('Covid').doc(id).delete();
  }

  getCovidByCovidId(id): Observable<any> {
    return new Observable(observer => {
      this.covidCollection
        .doc(id)
        .snapshotChanges()
        .pipe(
          map(changes => {
            const data = changes.payload.data();
            const id = changes.payload.id;
            return { id, data };
          })
        )
        .subscribe(res => {
          observer.next(res);
        });
    });
  }

  // Get one data in database
  getOneProduct(idCovid: string) {
    this.covidDoc = this.angularfirestore.doc<Covid>(`Covid/${idCovid}`);
    return this.covidView = this.covidDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data();
        data.Created = new Date(data.Created.seconds * 1000);
        data.id = action.payload.id;
        return data;
      }
    }));
  }
}
