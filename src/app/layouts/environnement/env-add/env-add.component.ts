import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { secteurList } from 'src/app/shared/db/province';

import { Environement } from '../services/models/environement';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-env-add',
  templateUrl: './env-add.component.html',
  styleUrls: ['./env-add.component.scss']
})
export class EnvAddComponent implements OnInit {

  qualite: string[] = ['Très Bonne', 'Bonne', 'Moyen', 'Mauvaise', 'Très Mauvaise'];

  booleen: string[] = ['OUI', 'NON'];

  addEnvironementForm: FormGroup;
  EnvironementInfo: Environement = {
    id: '',
    CalamiteNaturelRecente: '',
    AirProtege: '',
    RapportGeneralEnvironement: '',
    // Nation: '',
    Province: '',
    // Territoire?: string;
    CommunaleUrbain: '',
    CheferieSecteur: '',
    Created: null,
    agentId: '',
    // ecoImageUrl: ''
  };

  isPreview = false;

  isLoading: boolean = false;

  getAgentId: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder,
    private envService: EnvService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getUserId();
    this.makingaddEnvironementForm();

  }

  makingaddEnvironementForm() {
    this.addEnvironementForm = this.fb.group({
      CalamiteNaturelRecente: ['', Validators.required],
      AirProtege: ['', Validators.required],
      RapportGeneralEnvironement: ['', Validators.required],
      agentId: [''],
      Province: ['', Validators.required],
      // Territoire: [''],
      CommunaleUrbain: ['', Validators.required],
      CheferieSecteur: ['', Validators.required]
    });
  }

  getUserId(){
    this.envService.getUserId().subscribe( res => {
      this.getAgentId = res;
    });
  }

  onSubmit() {
    if (this.addEnvironementForm.valid) {
          this.isLoading = true;
          this.EnvironementInfo = {
            CalamiteNaturelRecente: this.addEnvironementForm.value.CalamiteNaturelRecente,
            AirProtege: this.addEnvironementForm.value.AirProtege,
            RapportGeneralEnvironement: this.addEnvironementForm.value.RapportGeneralEnvironement,
            Province: this.addEnvironementForm.value.Province,
            // Territoire: this.addEnvironementForm.value.Territoire,
            CommunaleUrbain: this.addEnvironementForm.value.CommunaleUrbain,
            CheferieSecteur: this.addEnvironementForm.value.CheferieSecteur,
            Created: new Date(),
            agentId: this.getAgentId
          };
          this.envService.createEnvironement(this.EnvironementInfo);
          this.addEnvironementForm.reset();
          this.showSnackbar();
        // console.log(this.EnvironementInfo);
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
    const path = `Environement/${new Date().getTime()}_${file.name}`;
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
