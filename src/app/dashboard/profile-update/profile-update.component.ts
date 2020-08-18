import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireUploadTask } from '@angular/fire/storage/task';

import { SecurityService } from 'src/app/auth/services/guard/security.service';
import { DashboardService } from '../services/dashboard.service';
import { CustomerUserInformation } from 'src/app/auth/services/models/user';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {

  UpdateProfileForm:FormGroup;
  userInfo: CustomerUserInformation;
  role;

  constructor(private storage: AngularFireStorage,
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private snackbar: MatSnackBar,
    private sec:SecurityService,
    private route: Router
    ) { } 

  ngOnInit() {
    this.makingAddProductForm();
    this.dashboardService.getUserInfo().subscribe(res=>{
      this.pathData(res);
      this.userInfo = res;
      // console.log(res)
    });
    // this.sec.getRole().subscribe(res=>{
    //   this.role = res;
    // })
  }
  pathData(res) {
    this.UpdateProfileForm.patchValue({
      name: res.data.name,
      email: res.data.email,
      phoneNumber: res.data.phoneNumber,
      useraddress: res.data.useraddress,
      etatCivile: res.data.etatCivile,
      adress: res.data.adress
    })
  }
  makingAddProductForm() {
    this.UpdateProfileForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required]],
      useraddress: ["", [Validators.required]],
      etatCivile: ["", [Validators.required]],
    });
  }

  onSubmit(){
    this.userInfo ={
      name: this.UpdateProfileForm.value.name,
      email: this.UpdateProfileForm.value.email,
      phoneNumber: this.UpdateProfileForm.value.phoneNumber,
      useraddress: this.UpdateProfileForm.value.useraddress,
      etatCivile: this.UpdateProfileForm.value.etatCivile,
      photoURL: this.getImageUrl()
    }
    this.dashboardService.updateUserInfo(this.userInfo);
    this.showSnackbar();
    this.route.navigate(['/layouts/dashboard/profile'])

  }
 
  showSnackbar() {
    this.snackbar.open('Enregistrement Reussie!', '', {
      duration: 3000
    });
  }
  
  getImageUrl(){
    if(this.imgDownloadUrl == ""){
      if(this.userInfo.photoURL == ""){
        return ""
      }
      else{
        return this.userInfo.photoURL;
      }
    }
    else{
      return this.imgDownloadUrl;
    }
  }

  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  //download url string
  imgDownloadUrl: string;

  // State for dropzone CSS toggling
  isHovering: boolean;

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // this.isPreview = true;
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split("/")[0] !== "image") {
      console.error("unsupported file type :( ");
      return;
    }

    // The storage path
    const path = `User/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    // Totally optional metadata
    const customMetadata = { app: "My AngularFire-powered PWA!" };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    //Download URL file
    this.snapshot = this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = this.storage.ref(path).getDownloadURL()
          console.log(this.downloadURL); // Get a Observable
          this.downloadURL.subscribe(res => {
            if (res) {
              this.imgDownloadUrl = res;
            }
          });
        })
      );  
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return (
      snapshot.state === "running" &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }

}
