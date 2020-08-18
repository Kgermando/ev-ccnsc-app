import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SocioP } from './models/socio-p';

@Injectable({
  providedIn: 'root'
})
export class SocioPService {
  userId: string;
  SocioP: any;
  SocioPCollection: AngularFirestoreCollection<SocioP>;
  SocioPInfo: Observable<SocioP[]>;

   // Pour la methode getOneProduct()
  private envDoc: AngularFirestoreDocument<SocioP>;
  public envView: Observable<SocioP>;

  constructor(
    private angularfireauth: AngularFireAuth,
    private angularfirestore: AngularFirestore
  ) {
    this.angularfireauth.authState.subscribe(user => {
      if (user) { this.userId = user.uid; }
    });

    this.SocioPCollection = angularfirestore.collection<SocioP>("SocioP");
  }

  getUserId(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        observer.next(user.uid);
      });
    });
  }

  createSocioP(SocioPInfo) {
    this.SocioPCollection.add(SocioPInfo);
  }

  updateSocioP(SocioPInfo, SocioPId) {
    this.SocioPCollection.doc(SocioPId).update(SocioPInfo);
  }

  getAllSocioP(): Observable<any> {
    return new Observable(observer => {
          this.angularfirestore
            .collection<SocioP>('SocioP',
              ref => ref.orderBy('Created', 'desc'))
            .snapshotChanges()
            .subscribe(socioP => {
              observer.next(socioP);
            });
      });
  }

  getSocioPByAgent(): Observable<any> {
    return new Observable(observer => {
      this.angularfireauth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid;
          this.angularfirestore
            .collection<SocioP>("SocioP", ref =>
              ref.where("agentId", "==", this.userId)
            )
            .snapshotChanges()
            .subscribe(SocioP => {
              observer.next(SocioP);
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
        .collection("Person")
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

  removeSocioPByID(id){
    this.angularfirestore.collection("SocioP").doc(id).delete();
  }

  getSocioPBySocioPId(id): Observable<any> {
    return new Observable(observer => {
      this.SocioPCollection
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
  getOneProduct(idSocioP: string) {
    this.envDoc = this.angularfirestore.doc<SocioP>(`SocioP/${idSocioP}`);
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
