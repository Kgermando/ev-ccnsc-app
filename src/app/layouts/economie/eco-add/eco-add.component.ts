import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Economie } from '../services/models/economie';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { EcoService } from '../services/eco.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { secteurList } from 'src/app/shared/db/province';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eco-add',
  templateUrl: './eco-add.component.html',
  styleUrls: ['./eco-add.component.scss']
})
export class EcoAddComponent implements OnInit {

  qualite: string[] = ['Très Bonne', 'Bonne', 'Moyen', 'Mauvaise', 'Très Mauvaise'];

  addEconomieForm: FormGroup;
  economieInfo: Economie = {
    id: '',
    TauxDeCHangeDollard: '',
    TauxDeCHangeFc: '',
    // Prix de denrée de premier neccesiteux
    PrixDenreMais: '',
    PrixDenreRiz: '',
    PrixDenreHaricot: '',
    PrixDenreSucre: '',
    PrixDenreLait: '',
    PrixDenreThe: '',
    PrixDenreCafe: '',
    PrixDenreTomate: '',
    PrixDenreSel: '',
    PrixDenreAil: '',
    PrixDenreOignon: '',
    PrixDenreSavon: '',
    PrixDenreMargarin: '',
    PrixDenreSpaghetti: '',
    PrixDenreFroma: '',
    PrixDenrePoisson: '',
    PrixDenreHuileRouge: '',
    PrixDenreHuileJaune: '',
    PrixDuEssence: '',
    PrixDuPretrole: '',
    PrixDuMazoute: '',
    QualiteRN: '',
    NomRN: '',
    QualiteCheminDeFer: '',
    QualiteAeroport: '',
    NomAeroport: '',
    RapportGeneralEconomique: '',
    // Agent: '',
    // Nation: '',
    Province: '',
    // Territoire: '',
    CommunaleUrbain: '',
    CheferieSecteur: '',
    Created: null,
    agentId: '',
    // ecoImageUrl: ''
  };

  isPreview = false;

  isLoading: boolean = false;

  getagentId: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder,
    private ecoService: EcoService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserId();
    this.makingaddEconomieForm();

  }


  makingaddEconomieForm() {
    this.addEconomieForm = this.fb.group({
      TauxDeCHangeDollard: ['', Validators.required],
      TauxDeCHangeFc: ['', Validators.required],
      PrixDenreMais: ['', Validators.required],
      PrixDenreRiz: ['', Validators.required],
      PrixDenreHaricot: ['', Validators.required],
      PrixDenreSucre: ['', Validators.required],
      PrixDenreLait: ['', Validators.required],
      PrixDenreThe: [''],
      PrixDenreCafe: [''],
      PrixDenreTomate: [''],
      PrixDenreSel: ['', Validators.required],
      PrixDenreAil: [''],
      PrixDenreOignon: [''],
      PrixDenreSavon: [''],
      PrixDenreMargarin: [''],
      PrixDenreSpaghetti: [''],
      PrixDenreFroma: [''],
      PrixDenrePoisson: [''],
      PrixDenreHuileRouge: '',
      PrixDenreHuileJaune: '',
      PrixDuEssence: [''],
      PrixDuPretrole: [''],
      PrixDuMazoute: [''],
      QualiteRN: [''],
      NomRN: [''],
      QualiteCheminDeFer: [''],
      QualiteAeroport: [''],
      NomAeroport: [''],
      RapportGeneralEconomique: [''],
      Province: [''],
      // Territoire: [''],
      CommunaleUrbain: [''],
      CheferieSecteur: [''],
    });
    // this.economieInfo.subscribe(economieInfo => {
    //   this.addEconomieForm.patchValue(economieInfo);
    // });
  }

  getUserId(){
      this.ecoService.getUserId().subscribe(res=>{
        this.getagentId = res;
      })
  }

  onSubmit() {
    if (this.addEconomieForm.valid) {
          this.isLoading = true;
          this.economieInfo = {
            TauxDeCHangeDollard: this.addEconomieForm.value.TauxDeCHangeDollard,
            TauxDeCHangeFc: this.addEconomieForm.value.TauxDeCHangeFc,
            PrixDenreMais: this.addEconomieForm.value.PrixDenreMais,
            PrixDenreRiz: this.addEconomieForm.value.PrixDenreRiz,
            PrixDenreHaricot: this.addEconomieForm.value.PrixDenreHaricot,
            PrixDenreSucre: this.addEconomieForm.value.PrixDenreSucre,
            PrixDenreLait: this.addEconomieForm.value.PrixDenreLait,
            PrixDenreThe: this.addEconomieForm.value.PrixDenreThe,
            PrixDenreCafe: this.addEconomieForm.value.PrixDenreCafe,
            PrixDenreTomate: this.addEconomieForm.value.PrixDenreTomate,
            PrixDenreSel: this.addEconomieForm.value.PrixDenreSel,
            PrixDenreAil: this.addEconomieForm.value.PrixDenreAil,
            PrixDenreOignon: this.addEconomieForm.value.PrixDenreOignon,
            PrixDenreSavon: this.addEconomieForm.value.PrixDenreSavon,
            PrixDenreMargarin: this.addEconomieForm.value.PrixDenreMargarin,
            PrixDenreSpaghetti: this.addEconomieForm.value.PrixDenreSpaghetti,
            PrixDenreFroma: this.addEconomieForm.value.PrixDenreFroma,
            PrixDenrePoisson: this.addEconomieForm.value.PrixDenrePoisson,
            PrixDenreHuileRouge: this.addEconomieForm.value.PrixDenreHuileRouge,
            PrixDenreHuileJaune: this.addEconomieForm.value.PrixDenreHuileJaune,
            PrixDuEssence: this.addEconomieForm.value.PrixDuEssence,
            PrixDuPretrole: this.addEconomieForm.value.PrixDuPretrole,
            PrixDuMazoute: this.addEconomieForm.value.PrixDuMazoute,
            QualiteRN: this.addEconomieForm.value.QualiteRN,
            NomRN: this.addEconomieForm.value.NomRN,
            QualiteCheminDeFer: this.addEconomieForm.value.QualiteCheminDeFer,
            QualiteAeroport: this.addEconomieForm.value.QualiteAeroport,
            NomAeroport: this.addEconomieForm.value.NomAeroport,
            RapportGeneralEconomique: this.addEconomieForm.value.RapportGeneralEconomique,
            // Nation: this.addEconomieForm.value.Nation,
            Province: this.addEconomieForm.value.Province,
            // Territoire: this.addEconomieForm.value.Territoire,
            CommunaleUrbain: this.addEconomieForm.value.CommunaleUrbain,
            CheferieSecteur: this.addEconomieForm.value.CheferieSecteur,
            // ecoImageUrl: this.imgDownloadUrl,
            Created: new Date(),
            agentId: this.getagentId
          };
        this.ecoService.createEconomie(this.economieInfo);
        this.addEconomieForm.reset();
        this.showSnackbar();
        this.router.navigate(['/layouts/economie/eco-list']);
        // console.log(this.economieInfo);
      } else {
        this.openErrorBar();
      }
  }


  showSnackbar() {
		this.snackbar.open('Rapports Economie Envoyé!', '', {
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
    const path = `Economie/${new Date().getTime()}_${file.name}`;
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
