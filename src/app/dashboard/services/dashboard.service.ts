import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { CustomerUserInformation } from 'src/app/auth/services/models/user';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  userId: string;

  constructor(private angularfirestore: AngularFirestore, private angularfireauth: AngularFireAuth) {}

  getUserInfo():Observable<any>{
    return new Observable(observer=>{
      this.angularfireauth.authState.subscribe(user=>{
        if(user){
          this.userId = user.uid;
          this.angularfirestore.collection("Person").doc(this.userId).snapshotChanges().pipe(map(changes => {
            const data = changes.payload.data();
                const id = changes.payload.id;
                return { id, data };
          })).subscribe(res=>{
            observer.next(res)
          })
        }
        else{
          observer.next(null);
        } 
      })
    })
  }

  updateUserInfo(userInfo){
    this.angularfireauth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
      this.angularfirestore.collection("Person").doc(this.userId).update(userInfo);
    });
  }
}
