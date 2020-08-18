import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Environement } from './models/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  userId: string;
  environement: any;
  environementCollection: AngularFirestoreCollection<Environement>;
  environementInfo: Observable<Environement[]>;

   // Pour la methode getOneProduct()
  private envDoc: AngularFirestoreDocument<Environement>;
  public envView: Observable<Environement>;

  constructor(
    private angularfireauth: AngularFireAuth,
    private angularfirestore: AngularFirestore
  ) {
    this.angularfireauth.authState.subscribe(user => {
      if (user) { this.userId = user.uid; }
    });

    this.environementCollection = angularfirestore.collection<Environement>('Environement');
  }

  getUserId(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        observer.next(user.uid);
      });
    });
  }

  createEnvironement(environementInfo) {
    this.environementCollection.add(environementInfo);
  }

  updateEnvironement(environementInfo, environementId) {
    this.environementCollection.doc(environementId).update(environementInfo);
  }

  getAllEnvironement(): Observable<any> {
    return new Observable(observer => {
          this.angularfirestore
            .collection<Environement>('Environement',
              ref => ref.orderBy('Created', 'desc'))
            .snapshotChanges()
            .subscribe(environement => {
              observer.next(environement);
            });
      });
  }

  getEnvironementByAgent(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid;
          this.angularfirestore
            .collection<Environement>('Environement', ref =>
              ref.where('agentId', '==', this.userId)
            )
            .snapshotChanges()
            .subscribe(environement => {
              observer.next(environement);
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

  removeEnvironementByID(id){
    this.angularfirestore.collection('Environement').doc(id).delete();
  }

  getEnvironementByEnvironementId(id): Observable<any> {
    return new Observable(observer => {
      this.environementCollection
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
  getOneProduct(idEnvironement: string) {
    this.envDoc = this.angularfirestore.doc<Environement>(`Environement/${idEnvironement}`);
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
