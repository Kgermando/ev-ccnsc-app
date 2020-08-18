import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Economie } from '../services/models/economie';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { EcoService } from '../services/eco.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { secteurList } from 'src/app/shared/db/province';

@Component({
  selector: 'app-eco-edit',
  templateUrl: './eco-edit.component.html',
  styleUrls: ['./eco-edit.component.scss']
})
export class EcoEditComponent implements OnInit {

  qualite: string[] = ['Très Bonne', 'Bonne', 'Moyen', 'Mauvaise', 'Très Mauvaise'];


  addEconomieForm: FormGroup;
  economieInfo: Economie = {
    id: '',
    TauxDeCHangeDollard: '',
    TauxDeCHangeFc: '',
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
    Province: '',
    CommunaleUrbain: '',
    CheferieSecteur: '',
    Created: null,
    agentId: '',
    // ecoImageUrl: ''
  };

  isPreview = false;

  isLoading: boolean = false;

  economieid: any;
  getAgentId: string;

  constructor(
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private ecoService: EcoService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.makingaddEconomieForm();
    this.getUserId();
    let economieId = this.route.snapshot.paramMap.get("id");
    if (economieId) {
      this.getProductby(economieId);
      this.economieid = economieId;
    }
  }

  getUserId(){
    this.ecoService.getUserId().subscribe(res=>{
      this.getAgentId = res;
    })
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
      CommunaleUrbain: [''],
      CheferieSecteur: [''],
    });
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
            Province: this.addEconomieForm.value.Province,
            CommunaleUrbain: this.addEconomieForm.value.CommunaleUrbain,
            CheferieSecteur: this.addEconomieForm.value.CheferieSecteur,
            // ecoImageUrl: this.imgDownloadUrl,
            Created: new Date(),
            agentId: this.getAgentId
          };
        this.ecoService.updateEconomie(this.economieInfo, this.economieid);
        this.addEconomieForm.reset();
        this.showSnackbar();
        // console.log(this.economieInfo);
        this.router.navigate(['/layouts/economie/eco-list']);
      } else {
        this.openErrorBar();
      }
  }

    showSnackbar() {
      this.snackbar.open('Rapports économie Modifié!', '', {
        duration: 6000
      });
    }

    openErrorBar() {
      this.snackbar.open('Erreur de modification!', '', {
        duration: 6000
      });
    }


  // getImageUrl(){
  //   if(this.imgDownloadUrl == null){
  //     if(this.economieInfo.ecoImageUrl == null){
  //     }
  //     else{
  //       return this.economieInfo.ecoImageUrl;
  //     }
  //   }
  //   else{
  //     return this.imgDownloadUrl;
  //   }
  // }

  getProductby(economieId) {
    this.ecoService.getEconomieByEconomieId(economieId).subscribe(economie => {
      this.patchData(economie.data);
      this.economieInfo = economie.data;
    });
    // console.log(this.economieInfo););
  }

  patchData(economie: Economie) {
    this.addEconomieForm.patchValue({
      TauxDeCHangeDollard: economie.TauxDeCHangeDollard,
      TauxDeCHangeFc: economie.TauxDeCHangeFc,
      PrixDenreMais: economie.PrixDenreMais,
      PrixDenreRiz: economie.PrixDenreRiz,
      PrixDenreHaricot: economie.PrixDenreHaricot,
      PrixDenreSucre: economie.PrixDenreSucre,
      PrixDenreLait: economie.PrixDenreLait,
      PrixDenreThe: economie.PrixDenreThe,
      PrixDenreCafe: economie.PrixDenreCafe,
      PrixDenreTomate: economie.PrixDenreTomate,
      PrixDenreSel: economie.PrixDenreSel,
      PrixDenreAil: economie.PrixDenreAil,
      PrixDenreOignon: economie.PrixDenreOignon,
      PrixDenreSavon: economie.PrixDenreSavon,
      PrixDenreMargarin: economie.PrixDenreMargarin,
      PrixDenreSpaghetti: economie.PrixDenreSpaghetti,
      PrixDenreFroma: economie.PrixDenreFroma,
      PrixDenrePoisson: economie.PrixDenrePoisson,
      PrixDenreHuileRouge: economie.PrixDenreHuileRouge,
      PrixDenreHuileJaune: economie.PrixDenreHuileJaune,
      PrixDuEssence: economie.PrixDuEssence,
      PrixDuPretrole: economie.PrixDuPretrole,
      PrixDuMazoute: economie.PrixDuMazoute,
      QualiteRN: economie.QualiteRN,
      NomRN: economie.NomRN,
      QualiteCheminDeFer: economie.QualiteCheminDeFer,
      QualiteAeroport: economie.QualiteAeroport,
      NomAeroport: economie.NomAeroport,
      RapportGeneralEconomique: economie.RapportGeneralEconomique,
      Province: economie.Province,
      CommunaleUrbain: economie.CommunaleUrbain,
      CheferieSecteur: economie.CheferieSecteur
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
    const path = `Product/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    // Totally optional metadata
    const customMetadata = { app: "My AngularFire-powered PWA!" };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    //Download URL file
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.storage.ref(path).getDownloadURL();
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
