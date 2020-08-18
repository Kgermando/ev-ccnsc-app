import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { secteurList } from 'src/app/shared/db/province';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ebola } from '../services/models/Ebola';
import { EbolaService } from '../services/ebola.service';

@Component({
  selector: 'app-ebola-add',
  templateUrl: './ebola-add.component.html',
  styleUrls: ['./ebola-add.component.scss']
})
export class EbolaAddComponent implements OnInit {

  qualites: string[] = ['Très Bonne', 'Bonne', 'Moyen', 'Mauvaise', 'Très Mauvaise'];

  booleens: string[] = ['OUI', 'NON'];

  addEbolaForm: FormGroup;
  ebolaInfo: Ebola = {
    id: '',
    PhotoUrl: '',
    NbreContaminerFemme: 0,
    NbreTotalContamine: 0,
    NbreGuerisFemme: 0,
    NbreTotalGueris: 0,
    NbreDecesFemme: 0,
    NbreTotalDeces: 0,
    EtatFinancementStructureSanitaire: '',
    AccesbiliteStructureSantairePopulation: '',
    RapportGeneraleEbola: '',
    Province: '',
    CommunaleUrbain: '',
    CheferieSecteur: '',
    Created: null,
    agentId: ''
  };

  isPreview = false;

  isLoading: boolean = false;

  getagentId: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private router: Router,
    private fb: FormBuilder,
    private ebolaService: EbolaService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getUserId();
    this.makingaddEbolaForm();
  }

  makingaddEbolaForm() {
    this.addEbolaForm = this.fb.group({
      NbreContaminerFemme: ['', Validators.required],
      NbreTotalContamine: ['', Validators.required],
      NbreGuerisFemme: ['', Validators.required],
      NbreTotalGueris: ['', Validators.required],
      NbreDecesFemme: ['', Validators.required],
      NbreTotalDeces: ['', Validators.required],
      EtatFinancementStructureSanitaire: ['', Validators.required],
      AccesbiliteStructureSantairePopulation: ['', Validators.required],
      RapportGeneraleEbola: ['', Validators.required],
      Province: [''],
      CommunaleUrbain: [''],
      CheferieSecteur: ['']
    });
  }

  getUserId(){
    this.ebolaService.getUserId().subscribe(res=>{
      this.getagentId = res;
    })
  }

  onSubmit() {
    if (this.addEbolaForm.valid) {
          this.isLoading = true;
          this.ebolaInfo = {
            // PhotoUrl: this.addEbolaForm.value.PhotoUrl,
            NbreContaminerFemme: this.addEbolaForm.value.NbreContaminerFemme,
            NbreTotalContamine: this.addEbolaForm.value.NbreTotalContamine,
            NbreGuerisFemme: this.addEbolaForm.value.NbreGuerisFemme,
            NbreTotalGueris: this.addEbolaForm.value.NbreTotalGueris,
            NbreDecesFemme: this.addEbolaForm.value.NbreDecesFemme,
            NbreTotalDeces: this.addEbolaForm.value.NbreTotalDeces,
            EtatFinancementStructureSanitaire: this.addEbolaForm.value.EtatFinancementStructureSanitaire,
            AccesbiliteStructureSantairePopulation: this.addEbolaForm.value.AccesbiliteStructureSantairePopulation,
            RapportGeneraleEbola: this.addEbolaForm.value.RapportGeneraleEbola,
            Province: this.addEbolaForm.value.Province,
            CommunaleUrbain: this.addEbolaForm.value.CommunaleUrbain,
            CheferieSecteur: this.addEbolaForm.value.CheferieSecteur,
            Created: new Date(),
            agentId: this.getagentId
          };
        this.ebolaService.createEbola(this.ebolaInfo);
        this.addEbolaForm.reset();
        this.showSnackbar();
        this.router.navigate(['/layouts/sante/ebola/ebola-list'])
        // console.log(this.ebolaInfo);
      } else {
        this.openErrorBar();
      }
  }


  showSnackbar() {
		this.snackbar.open('Rapports santé Envoyé!', '', {
      duration: 8000
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
    const path = `Ebola/${new Date().getTime()}_${file.name}`;
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
