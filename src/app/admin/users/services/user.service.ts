import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QueryFn, AngularFirestoreCollection, AngularFirestore,
         AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Person } from 'src/app/auth/services/models/user';



@Injectable({
  providedIn: 'root'
})
export class PersonService {

  readonly path = 'Person';
  private collection: AngularFirestoreCollection<Person>;

  private PersonDoc: AngularFirestoreDocument<Person>;
  private Person: Observable<Person>;


  constructor(private afs: AngularFirestore, private angularfireauth: AngularFireAuth) {
    this.collection = afs.collection<Person>(this.path);
  }

  private getCollection(collection: string) {
    this.collection = this.afs.collection<Person>(collection);
  }

  add(data: Person) {
    return this.afs.doc<Person>(`${this.path}/${data.uid}`).set(data).then((error => {
      console.log(error);
    }));
  }

  remove(uid: string): Promise<void> {
    return this.afs.doc<Person>(`${this.path}/${uid}`).delete();
  }

  removeProductByID(id){
    this.afs.collection('Person').doc(id).delete();
  }

  update(data: Person) {
    return this.afs.doc<Person>(`${this.path}/${data.uid}`).set(data).then((error => {
      console.log(error);
    }));
  }

  getAllPerson(): Observable<any> {
    return new Observable(observer => {
      this.afs.collection<Person>('Person')
        .snapshotChanges()
        .subscribe(person => {
            observer.next(person);
      });
    });
  }

  getCollection$(ref?: QueryFn): Observable<Person[]> {
    return this.afs.collection<Person>(this.path, ref)
      .snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Person;
          const id = data.uid;
          return { id, ...data };
        });
      })
    );
  }

  getProductBySupplier(ref?: QueryFn): Observable<any> {
      return new Observable(observer => {
        this.angularfireauth.authState.subscribe(person => {
            this.afs.collection<Person>('Person', ref)
              .snapshotChanges()
              .subscribe(product => {
                observer.next(product);
              });
          } );
      });
    }

    getOnePerson(idPerson: string) {
      this.PersonDoc = this.afs.doc<Person>(`Person/${idPerson}`);
      return this.Person = this.PersonDoc.snapshotChanges().pipe(map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data();
          data.uid = action.payload.id;
          return data;
        }
      }));
    }
}
