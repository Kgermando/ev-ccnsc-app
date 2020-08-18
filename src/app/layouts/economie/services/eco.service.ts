import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Economie } from './models/economie';

@Injectable({
  providedIn: 'root'
})
export class EcoService {
  userId: string;
  economie: any;
  economieCollection: AngularFirestoreCollection<Economie>;
  economieInfo: Observable<Economie[]>;

   // Pour la methode getOneProduct()
  private productDoc: AngularFirestoreDocument<Economie>;
  public productView: Observable<Economie>;

  constructor(
    private angularfireauth: AngularFireAuth,
    private angularfirestore: AngularFirestore
  ) {
    this.angularfireauth.authState.subscribe(user => {
      if (user) { this.userId = user.uid; }
    });

    this.economieCollection = angularfirestore.collection<Economie>('Economie');
  }

  getUserId(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        observer.next(user.uid);
      });
    });
  }

  createEconomie(economieInfo) {
    this.economieCollection.add(economieInfo);
  }

  updateEconomie(economieInfo, economieId) {
    this.economieCollection.doc(economieId).update(economieInfo);
  }

  getAllEconomie(): Observable<any> {
    return new Observable(observer => {
          this.angularfirestore
            .collection<Economie>('Economie',
              ref => ref.orderBy('Created', 'desc'))
            .snapshotChanges()
            .subscribe(economie => {
              observer.next(economie);
            });
      });
  }

  getEconomieByAgent(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid;
          this.angularfirestore
            .collection<Economie>('Economie', ref =>
              ref.where('agentId', '==', this.userId)
            )
            .snapshotChanges()
            .subscribe(economie => {
              observer.next(economie);
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
        })
    });
  }

  removeEconomieByID(id){
    this.angularfirestore.collection('Economie').doc(id).delete();
  }

  getEconomieByEconomieId(id): Observable<any> {
    return new Observable(observer => {
      this.economieCollection
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

  // Geet one data in database
  getOneProduct(idEconomie: string) {
    this.productDoc = this.angularfirestore.doc<Economie>(`Economie/${idEconomie}`);
    return this.productView = this.productDoc.snapshotChanges().pipe(map(action => {
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
