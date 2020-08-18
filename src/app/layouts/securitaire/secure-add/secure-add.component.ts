import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { secteurList } from 'src/app/shared/db/province';
import { Secure } from '../services/models/secure';
import { SecureService } from '../services/secure.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-add',
  templateUrl: './secure-add.component.html',
  styleUrls: ['./secure-add.component.scss']
})
export class SecureAddComponent implements OnInit {

  qualite: string[] = ['Très Bonne', 'Bonne', 'Moyen', 'Mauvaise', 'Très Mauvaise'];

  booleen: string[] = ['OUI', 'NON'];

  addSecureForm: FormGroup;
  SecureInfo: Secure = {
    id: '',
    IdentificationZoneTension: '',
    ElementViolationDroitHumain: '',
    ElementCriminaliteUrbainRurale: '',
    ViolViolenceSexuel: '',
    NbreGroupeArmeActifRegion: 0,
    InitiavesPaixImplique: 0,
    RelationActeurSecuritSocieteCivile: '',
    RelationActeurSecuriteMedia: '',
    RapportGeneraleSecure: '',
    Province: '',
    CommunaleUrbain: '',
    CheferieSecteur: '',
    Created: null,
    agentId: ''
    // ecoImageUrl: ''
  };

  isPreview = false;

  isLoading: boolean = false;

  getManagerID: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
    private secureService: SecureService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getUserId();
    this.makingaddSecureForm();
  }
  
  makingaddSecureForm() {
    this.addSecureForm = this.fb.group({
      IdentificationZoneTension: ['', Validators.required],
      ElementViolationDroitHumain: ['', Validators.required],
      ElementCriminaliteUrbainRurale: ['', Validators.required],
      ViolViolenceSexuel: ['', Validators.required],
      NbreGroupeArmeActifRegion: ['', Validators.required],
      InitiavesPaixImplique: ['', Validators.required],
      RelationActeurSecuritSocieteCivile: ['', Validators.required],
      RelationActeurSecuriteMedia: ['', Validators.required],
      RapportGeneraleSecure: ['', Validators.required],
      managerId: [''],
      Province: ['', Validators.required],
      CommunaleUrbain: ['', Validators.required],
      CheferieSecteur: ['', Validators.required]
    });
  }

  getUserId(){
      this.secureService.getUserId().subscribe(res => {
        this.getManagerID = res;
      });
  }

  onSubmit() {
    if (this.addSecureForm.valid) {
          this.isLoading = true;
          this.SecureInfo = {
            IdentificationZoneTension: this.addSecureForm.value.IdentificationZoneTension,
            ElementViolationDroitHumain: this.addSecureForm.value.ElementViolationDroitHumain,
            ElementCriminaliteUrbainRurale: this.addSecureForm.value.ElementCriminaliteUrbainRurale,
            ViolViolenceSexuel: this.addSecureForm.value.ViolViolenceSexuel,
            NbreGroupeArmeActifRegion: this.addSecureForm.value.NbreGroupeArmeActifRegion,
            InitiavesPaixImplique: this.addSecureForm.value.InitiavesPaixImplique,
            RelationActeurSecuritSocieteCivile: this.addSecureForm.value.RelationActeurSecuritSocieteCivile,
            RelationActeurSecuriteMedia: this.addSecureForm.value.RelationActeurSecuriteMedia,
            RapportGeneraleSecure: this.addSecureForm.value.RapportGeneraleSecure,
            Province: this.addSecureForm.value.Province,
            // Territoire: this.addSecureForm.value.Territoire,
            CommunaleUrbain: this.addSecureForm.value.CommunaleUrbain,
            CheferieSecteur: this.addSecureForm.value.CheferieSecteur,
            Created: new Date(),
            agentId: this.getManagerID
          };
          this.secureService.createSecure(this.SecureInfo);
          this.addSecureForm.reset();
          this.showSnackbar();
          this.router.navigate(['/layouts/securitaire/secure-list']);
        // console.log(this.SecureInfo);
      } else {
        this.openErrorBar();
      }
  }

  showSnackbar() {
		this.snackbar.open('Rapports Envoyé!', '', {
      duration: 6000
    });
  }

  openErrorBar() {
    this.snackbar.open('Erreur d\'enregistrement!', '', {
      duration: 6000
    });
  }

  // Province/ville/secteur
  countryList = secteurList;
  secteurCheferie: Array<any>;
  ville: Array<any>;

  changeCountry(count) {
    this.ville = this.countryList.find(con => con.name == count).ville;
    this.secteurCheferie = this.countryList.find(con => con.name == count).secteurCheferie;
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
    this.isPreview = true;
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split("/")[0] !== "image") {
      console.error("unsupported file type :( ");
      return;
    }

    // The storage path
    const path = `Secure/${new Date().getTime()}_${file.name}`;
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
          this.downloadURL = this.storage.ref(path).getDownloadURL();
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
