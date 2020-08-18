import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { secteurList } from 'src/app/shared/db/province';
import { Covid } from '../services/models/covid';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-covid-edit',
  templateUrl: './covid-edit.component.html',
  styleUrls: ['./covid-edit.component.scss']
})
export class CovidEditComponent implements OnInit {

  qualites: string[] = ['Très Bonne', 'Bonne', 'Moyen', 'Mauvaise', 'Très Mauvaise'];
  booleens: string[] = ['OUI', 'NON'];

  addCovidForm: FormGroup;
  covidInfo: Covid = {
    id: '',
    PhotoUrl: '',
    NbreTotalContamine: 0,
    NbreContaminerFemme: 0,
    NbreTotalGueris: 0,
    NbreGuerisFemme: 0,
    NbreTotalDeces: 0,
    NbreDecesFemme: 0,
    EtatFinancementStructureSanitaire: '',
    AccesbiliteStructureSantairePopulation: '',
    RapportGeneraleCovid: '',
    Province: '',
    CommunaleUrbain: '',
    CheferieSecteur: '',
    Created: null,
    agentId: ''
  };

  isPreview = false;

  isLoading: boolean = false;

  covidId: any;
  getagentId: string;

  constructor(
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private router: Router,
    private covidService: CovidService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.getUserId();
    this.makingaddCovidForm();
    let Covidid = this.route.snapshot.paramMap.get("id");
    if (Covidid) {
      this.getProductby(Covidid);
      this.covidId = Covidid;
    }
  }

  getUserId(){
    this.covidService.getUserId().subscribe(res=>{
      this.getagentId = res;
    })
}

  makingaddCovidForm() {
    this.addCovidForm = this.fb.group({
      NbreContaminerFemme: [''],
      NbreTotalContamine: [''],
      NbreGuerisFemme: [''],
      NbreTotalGueris: [''],
      NbreDecesFemme: [''],
      NbreTotalDeces: [''],
      EtatFinancementStructureSanitaire: [''],
      AccesbiliteStructureSantairePopulation: [''],
      RapportGeneraleCovid: [''],
      Province: [''],
      CommunaleUrbain: [''],
      CheferieSecteur: ['']
    });
  }


  onSubmit() {
    if (this.addCovidForm.valid) {
        this.isLoading = true;
        this.covidInfo = {
          NbreContaminerFemme: this.addCovidForm.value.NbreContaminerFemme,
          NbreTotalContamine: this.addCovidForm.value.NbreTotalContamine,
          NbreGuerisFemme: this.addCovidForm.value.NbreGuerisFemme,
          NbreTotalGueris: this.addCovidForm.value.NbreTotalGueris,
          NbreDecesFemme: this.addCovidForm.value.NbreDecesFemme,
          NbreTotalDeces: this.addCovidForm.value.NbreTotalDeces,
          EtatFinancementStructureSanitaire: this.addCovidForm.value.EtatFinancementStructureSanitaire,
          AccesbiliteStructureSantairePopulation: this.addCovidForm.value.AccesbiliteStructureSantairePopulation,
          RapportGeneraleCovid: this.addCovidForm.value.RapportGeneraleCovid,
          Province: this.addCovidForm.value.Province,
          CommunaleUrbain: this.addCovidForm.value.CommunaleUrbain,
          CheferieSecteur: this.addCovidForm.value.CheferieSecteur,
          Created: new Date(),
          agentId: this.getagentId
        };
      this.covidService.updateCovid(this.covidInfo, this.covidId);
      this.addCovidForm.reset();
      this.showSnackbar();
      this.router.navigate(['/layouts/sante/covid/covid-list'])
      // console.log(this.covidInfo);
    } else {
      this.openErrorBar();
    }
  }

    showSnackbar() {
      this.snackbar.open('Rapports santé Modifié!', '', {
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

  getProductby(covidId) {
    this.covidService.getCovidByCovidId(covidId).subscribe(covid => {
      this.patchData(covid.data);
      this.covidInfo = covid.data;
    });
    // console.log(this.economieInfo););
  }

  patchData(covid: Covid) {
    this.addCovidForm.patchValue({
      NbreContaminerFemme: covid.NbreContaminerFemme,
      NbreTotalContamine: covid.NbreTotalContamine,
      NbreGuerisFemme: covid.NbreGuerisFemme,
      NbreTotalGueris: covid.NbreTotalGueris,
      NbreDecesFemme: covid.NbreDecesFemme,
      NbreTotalDeces: covid.NbreTotalDeces,
      EtatFinancementStructureSanitaire: covid.EtatFinancementStructureSanitaire,
      AccesbiliteStructureSantairePopulation: covid.AccesbiliteStructureSantairePopulation,
      RapportGeneraleCovid: covid.RapportGeneraleCovid,
      Province: covid.Province,
      CommunaleUrbain: covid.CommunaleUrbain,
      CheferieSecteur: covid.CheferieSecteur
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
    const path = `Covid/${new Date().getTime()}_${file.name}`;
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
