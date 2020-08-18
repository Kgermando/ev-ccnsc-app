import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { secteurList } from 'src/app/shared/db/province';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ebola } from '../services/models/Ebola';
import { EbolaService } from '../services/ebola.service';

@Component({
  selector: 'app-ebola-edit',
  templateUrl: './ebola-edit.component.html',
  styleUrls: ['./ebola-edit.component.scss']
})
export class EbolaEditComponent implements OnInit {

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

  ebolaId: any;
  getAgentId: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
    private ebolaService: EbolaService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.getUserId();
    this.makingaddEbolaForm();
    let ebolaid = this.route.snapshot.paramMap.get("id");
    if (ebolaid) {
      this.getProductby(ebolaid);
      this.ebolaId = ebolaid;
    }
  }

  getUserId(){
    this.ebolaService.getUserId().subscribe(res=>{
      this.getAgentId = res;
  })
}

  makingaddEbolaForm() {
    this.addEbolaForm = this.fb.group({
      NbreContaminerFemme: [''],
      NbreTotalContamine: [''],
      NbreGuerisFemme: [''],
      NbreTotalGueris: [''],
      NbreDecesFemme: [''],
      NbreTotalDeces: [''],
      EtatFinancementStructureSanitaire: [''],
      AccesbiliteStructureSantairePopulation: [''],
      RapportGeneraleEbola: [''],
      Province: [''],
      CommunaleUrbain: [''],
      CheferieSecteur: ['']
    });
  }


  onSubmit() {
    if (this.addEbolaForm.valid) {
        this.isLoading = true;
        this.ebolaInfo = {
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
          agentId: this.getAgentId
        };
      this.ebolaService.updateEbola(this.ebolaInfo, this.ebolaId);
      this.addEbolaForm.reset();
      this.showSnackbar();
      this.router.navigate(['/layouts/sante/ebola/ebola-list'])
      // console.log(this.ebolaInfo);
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

  getProductby(ebolaId) {
    this.ebolaService.getEbolaByEbolaId(ebolaId).subscribe(Ebola => {
      this.patchData(Ebola.data);
      this.ebolaInfo = Ebola.data;
    });
    // console.log(this.economieInfo););
  }

  patchData(ebola: Ebola) {
    this.addEbolaForm.patchValue({
      NbreContaminerFemme: ebola.NbreContaminerFemme,
      NbreTotalContamine: ebola.NbreTotalContamine,
      NbreGuerisFemme: ebola.NbreGuerisFemme,
      NbreTotalGueris: ebola.NbreTotalGueris,
      NbreDecesFemme: ebola.NbreDecesFemme,
      NbreTotalDeces: ebola.NbreTotalDeces,
      EtatFinancementStructureSanitaire: ebola.EtatFinancementStructureSanitaire,
      AccesbiliteStructureSantairePopulation: ebola.AccesbiliteStructureSantairePopulation,
      RapportGeneraleEbola: ebola.RapportGeneraleEbola,
      Province: ebola.Province,
      CommunaleUrbain: ebola.CommunaleUrbain,
      CheferieSecteur: ebola.CheferieSecteur
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
