import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Ebola } from './models/ebola';

@Injectable({
  providedIn: 'root'
})
export class EbolaService {
  userId: string;
  ebolaCollection: AngularFirestoreCollection<Ebola>;
  ebolaInfo: Observable<Ebola[]>;

  // Pour la methode getOneProduct()
  private ebolaDoc: AngularFirestoreDocument<Ebola>;
  public ebolaView: Observable<Ebola>;

  constructor(
    private angularfireauth: AngularFireAuth,
    private angularfirestore: AngularFirestore
  ) {
    this.angularfireauth.authState.subscribe(user => {
      if (user) { this.userId = user.uid; }
    });

    this.ebolaCollection = angularfirestore.collection<Ebola>('Ebola');
  }

  getUserId(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        observer.next(user.uid);
      });
    });
  }

  createEbola(ebolaInfo) {
    this.ebolaCollection.add(ebolaInfo);
  }

  updateEbola(ebolaInfo, ebolaId) {
    this.ebolaCollection.doc(ebolaId).update(ebolaInfo);
  }

  getAllEbola(): Observable<any> {
    return new Observable(observer => {
          this.angularfirestore
            .collection<Ebola>('Ebola',
              ref => ref.orderBy('Created', 'desc'))
            .snapshotChanges()
            .subscribe(ebola => {
              observer.next(ebola);
            });
      });
  }

  getEbolaByAgent(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid;
          this.angularfirestore
            .collection<Ebola>('Ebola', ref =>
              ref.where('agentId', '==', this.userId)
            )
            .snapshotChanges()
            .subscribe(ebola => {
              observer.next(ebola);
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

  removeEbolaByID(id){
    this.angularfirestore.collection('Ebola').doc(id).delete();
  }

  getEbolaByEbolaId(id): Observable<any> {
    return new Observable(observer => {
      this.ebolaCollection
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
  getOneProduct(idEbola: string) {
    this.ebolaDoc = this.angularfirestore.doc<Ebola>(`Ebola/${idEbola}`);
    return this.ebolaView = this.ebolaDoc.snapshotChanges().pipe(map(action => {
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
