import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Secure } from './models/secure';

@Injectable({
  providedIn: 'root'
})
export class SecureService {
  userId: string;
  Secure: any;
  SecureCollection: AngularFirestoreCollection<Secure>;
  SecureInfo: Observable<Secure[]>;

   // Pour la methode getOneProduct()
  private envDoc: AngularFirestoreDocument<Secure>;
  public envView: Observable<Secure>;

  constructor(
    private angularfireauth: AngularFireAuth,
    private angularfirestore: AngularFirestore
  ) {
    this.angularfireauth.authState.subscribe(user => {
      if (user) { this.userId = user.uid; }
    });

    this.SecureCollection = angularfirestore.collection<Secure>('Secure');
  }

  getUserId(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        observer.next(user.uid);
      });
    });
  }

  createSecure(SecureInfo) {
    this.SecureCollection.add(SecureInfo);
  }

  updateSecure(SecureInfo, SecureId) {
    this.SecureCollection.doc(SecureId).update(SecureInfo);
  }

  getAllSecure(): Observable<any> {
    return new Observable(observer => {
          this.angularfirestore
            .collection<Secure>('Secure',
              ref => ref.orderBy('Created', 'desc'))
            .snapshotChanges()
            .subscribe(secure => {
              observer.next(secure);
            });
      });
  }

  getSecureByAgent(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid;
          this.angularfirestore
            .collection<Secure>('Secure', ref =>
              ref.where('agentId', '==', this.userId)
            )
            .snapshotChanges()
            .subscribe(secure => {
              observer.next(secure);
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

  removeSecureByID(id){
    this.angularfirestore.collection('Secure').doc(id).delete();
  }

  getSecureBySecureId(id): Observable<any> {
    return new Observable(observer => {
      this.SecureCollection
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
  getOneProduct(idSecure: string) {
    this.envDoc = this.angularfirestore.doc<Secure>(`Secure/${idSecure}`);
    return this.envView = this.envDoc.snapshotChanges().pipe(map(action => {
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
