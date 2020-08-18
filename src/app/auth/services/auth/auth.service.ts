import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { UserInformation, CustomerUserInformation, Person } from '../models/user';
import { FormGroup } from '@angular/forms';
import { Entities } from '../models/enum';
import { UtilityService } from '../utility-service/utility.service';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<Person>;
  users$: Observable<Person[]>;

  // start with no user
  authState: any = null;

  usersCollection: AngularFirestoreCollection<Person>;

  constructor(private angularfireauth: AngularFireAuth,
              private angularfirestore: AngularFirestore,
              private util: UtilityService) {
      this.angularfireauth.authState.subscribe(data => (this.authState = data));

      // Get the auth state, then fetch the Firestore user document or return null
      this.user$ = this.angularfireauth.authState.pipe(
        switchMap(user => {
          if (user) {
            // logged in, get custom user from Firestore
            return this.angularfirestore.doc<Person>(`Person/${user.uid}`).valueChanges();
          } else {
            // logged out, null
            // tslint:disable-next-line: deprecation
            return of(null);
          }
        })
      );
  }

  getAllUsers() {
    this.usersCollection = this.angularfirestore.collection<Person>('Person');
    return (this.users$ = this.usersCollection.valueChanges());
  }

  signUp(user: UserInformation): Observable<any> {
    return new Observable((observer) => {
      this.angularfireauth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((accepted) => {
          user.metaData.uid = accepted.user.uid;
          this.createCustomUser(user.metaData);
          this.sendEmailVerification();
          observer.next(accepted);
        })
        .catch((err) => {
          observer.next(err);
        });
    });
  }

  createCustomUser(user: CustomerUserInformation) {
    const personCollection = this.angularfirestore.collection<UserInformation>(Entities.Person);
    personCollection.doc(user.uid).set(user);
  }

  getCurrentUser(){
    return this.angularfireauth.currentUser;
  }

  signOut() {
    this.angularfireauth.signOut();
  }

  sendEmailVerification() {
    firebase.auth().currentUser.sendEmailVerification();
  }


  signin(user: UserInformation): Observable<any> {
    return new Observable((observer) => {
      this.angularfireauth
        .signInWithEmailAndPassword(user.email, user.password)
        .then((acc) => {
          observer.next(acc);
        })
        .catch((err) => {
          observer.next(err);
        });
    });
  }

  touchAllfields(group: FormGroup){
    this.util.touchAllFieldsOfForm(group);
  }
}
