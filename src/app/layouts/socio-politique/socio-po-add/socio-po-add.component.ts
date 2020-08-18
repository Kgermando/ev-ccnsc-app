import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SocioP } from '../services/models/socio-p';
import { SocioPService } from '../services/socio-p.service';
import { secteurList } from 'src/app/shared/db/province';

@Component({
  selector: 'app-socio-po-add',
  templateUrl: './socio-po-add.component.html',
  styleUrls: ['./socio-po-add.component.scss']
})
export class SocioPoAddComponent implements OnInit {

  qualite: string[] = ['Très Bonne', 'Bonne', 'Moyen', 'Mauvaise', 'Très Mauvaise'];
  booleen: string[] = ['OUI', 'NON'];
  frais: string[] = ['Regulier', 'Irregulier'];
  revendication: string[] = ['Présenteisme', 'Grève', 'Autres', 'Aucune'];

  addSocioPForm: FormGroup;
  SocioPInfo: SocioP = {
    id: '',
    EnseignantMP: null,
    EnseignantMNP: null,
    EndeignantNUP: null,
    EndeignantNUNP: null,
    NbreEcole: null,  // par Quartier/Cheferie/secteur
    FraisFonctionnementEcole: '',
    Revendication: '',
    StructureSanitaireAccessiblePopulation: '',
    PopulationRecourMedecinTraditionnel: '',
    JeuneAccesStructureSanitaire: '',
    RelationAssembleGouvProv: '',
    RelationGouvernementOrganeJudiciare: '',
    RelationAssemblePouvoirJudiciaire: '',
    NbreDeDitProductionsParlement: null,
    NbreArreteProduitGourneur: null,
    RelationEntreETDETD: '',
    RelationAutoriteEtSocieteCivile: '',
    RelationOfficielEtMedia: '',
    ProgrammeDev: '',
    Budgetpart: '',
    RapportGeneralSocio: '',
    Province: '',
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
    private fb: FormBuilder,
    private socioPService: SocioPService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserId();
    this.makingaddSocioPForm();
  }

  makingaddSocioPForm() {
    this.addSocioPForm = this.fb.group({
      EnseignantMP: ['', Validators.required],
      EnseignantMNP: ['', Validators.required],
      EndeignantNUP: ['', Validators.required],
      EndeignantNUNP: ['', Validators.required],
      NbreEcole: ['', Validators.required],
      FraisFonctionnementEcole: ['', Validators.required],
      Revendication: ['', Validators.required],
      StructureSanitaireAccessiblePopulation: ['', Validators.required],
      PopulationRecourMedecinTraditionnel: ['', Validators.required],
      JeuneAccesStructureSanitaire: ['', Validators.required],
      RelationAssembleGouvProv: ['', Validators.required],
      RelationGouvernementOrganeJudiciare: [''],
      RelationAssemblePouvoirJudiciaire: [''],
      NbreDeDitProductionsParlement: [''],
      NbreArreteProduitGourneur: [''],
      RelationEntreETDETD: [''],
      RelationAutoriteEtSocieteCivile: [''],
      RelationOfficielEtMedia: [''],
      ProgrammeDev: [''],
      Budgetpart: [''],
      RapportGeneralSocio: [''],
      Province: [''],
      CommunaleUrbain: [''],
      CheferieSecteur: ['']
    });
  }

  getUserId(){
      this.socioPService.getUserId().subscribe(res=>{
        this.getAgentId = res;
      })
  }

  onSubmit() {
    if (this.addSocioPForm.valid) {
          this.isLoading = true;
          this.SocioPInfo = {
            EnseignantMP: this.addSocioPForm.value.EnseignantMP,
            EnseignantMNP: this.addSocioPForm.value.EnseignantMNP,
            EndeignantNUP: this.addSocioPForm.value.EndeignantNUP,
            EndeignantNUNP: this.addSocioPForm.value.EndeignantNUNP,
            NbreEcole: this.addSocioPForm.value.NbreEcole,
            FraisFonctionnementEcole: this.addSocioPForm.value.FraisFonctionnementEcole,
            Revendication: this.addSocioPForm.value.Revendication,
            StructureSanitaireAccessiblePopulation: this.addSocioPForm.value.StructureSanitaireAccessiblePopulation,
            PopulationRecourMedecinTraditionnel: this.addSocioPForm.value.PopulationRecourMedecinTraditionnel,
            JeuneAccesStructureSanitaire: this.addSocioPForm.value.JeuneAccesStructureSanitaire,
            RelationAssembleGouvProv: this.addSocioPForm.value.RelationAssembleGouvProv,
            RelationGouvernementOrganeJudiciare: this.addSocioPForm.value.RelationGouvernementOrganeJudiciare,
            RelationAssemblePouvoirJudiciaire: this.addSocioPForm.value.RelationAssemblePouvoirJudiciaire,
            NbreDeDitProductionsParlement: this.addSocioPForm.value.NbreDeDitProductionsParlement,
            NbreArreteProduitGourneur: this.addSocioPForm.value.NbreArreteProduitGourneur,
            RelationEntreETDETD: this.addSocioPForm.value.RelationEntreETDETD,
            RelationAutoriteEtSocieteCivile: this.addSocioPForm.value.RelationAutoriteEtSocieteCivile,
            RelationOfficielEtMedia: this.addSocioPForm.value.RelationOfficielEtMedia,
            ProgrammeDev: this.addSocioPForm.value.ProgrammeDev,
            Budgetpart: this.addSocioPForm.value.Budgetpart,
            RapportGeneralSocio: this.addSocioPForm.value.RapportGeneralSocio,
            Province: this.addSocioPForm.value.Province,
            CommunaleUrbain: this.addSocioPForm.value.CommunaleUrbain,
            CheferieSecteur: this.addSocioPForm.value.CheferieSecteur,
            Created: new Date(),
            agentId: this.getAgentId
          };
        this.socioPService.createSocioP(this.SocioPInfo);
        this.addSocioPForm.reset();
        this.showSnackbar();
        this.router.navigate(['/layouts/socio-politique/socio-p-list']);
        // console.log(this.SocioPInfo);
      } else {
        this.openErrorBar();
      }
  }


  showSnackbar() {
		this.snackbar.open('Rapports Socio-Politique Envoyé!', '', {
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
