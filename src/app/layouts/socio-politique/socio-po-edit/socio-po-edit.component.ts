import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { secteurList } from 'src/app/shared/db/province';
import { SocioP } from '../services/models/socio-p';
import { SocioPService } from '../services/socio-p.service';

@Component({
  selector: 'app-socio-po-edit',
  templateUrl: './socio-po-edit.component.html',
  styleUrls: ['./socio-po-edit.component.scss']
})
export class SocioPoEditComponent implements OnInit {
  qualite: string[] = ['Très Bonne', 'Bonne', 'Moyen', 'Mauvaise', 'Très Mauvaise'];
  booleen: string[] = ['OUI', 'NON'];
  frais: string[] = ['Regulier', 'Irregulier'];
  revendication: string[] = ['Présenteisme', 'Grève', 'Autres'];

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

  socioPid: any;
  getAgentId: string;

  constructor(
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private socioPService: SocioPService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.makingaddSocioPForm();
    this.getSupplierID();
    let socioPid = this.route.snapshot.paramMap.get("id");
    if (socioPid) {
      this.getProductby(socioPid);
      this.socioPid = socioPid;
    }
  }

  getSupplierID(){
    this.socioPService.getUserId().subscribe(res=>{
      this.getAgentId = res;
    })
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
        this.socioPService.updateSocioP(this.SocioPInfo, this.socioPid);
        this.addSocioPForm.reset();
        this.showSnackbar();
        this.router.navigate(['/layouts/socio-politique/socio-p-list']);
        // console.log(this.SocioPInfo);
      } else {
        this.openErrorBar();
      }
  }

    showSnackbar() {
      this.snackbar.open('Rapports Socio-Politique Modifié!', '', {
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

  getProductby(socioPId) {
    this.socioPService.getSocioPBySocioPId(socioPId).subscribe(socioP => {
      this.patchData(socioP.data);
      this.SocioPInfo = socioP.data;
    });
    // console.log(this.economieInfo););
  }

  patchData(socioP: SocioP) {
    this.addSocioPForm.patchValue({
      EnseignantMP: socioP.EnseignantMP,
      EnseignantMNP: socioP.EnseignantMNP,
      EndeignantNUP: socioP.EndeignantNUP,
      EndeignantNUNP: socioP.EndeignantNUNP,
      NbreEcole: socioP.NbreEcole,
      FraisFonctionnementEcole: socioP.FraisFonctionnementEcole,
      Revendication: socioP.Revendication,
      StructureSanitaireAccessiblePopulation: socioP.StructureSanitaireAccessiblePopulation,
      PopulationRecourMedecinTraditionnel: socioP.PopulationRecourMedecinTraditionnel,
      JeuneAccesStructureSanitaire: socioP.JeuneAccesStructureSanitaire,
      RelationAssembleGouvProv: socioP.RelationAssembleGouvProv,
      RelationGouvernementOrganeJudiciare: socioP.RelationGouvernementOrganeJudiciare,
      RelationAssemblePouvoirJudiciaire: socioP.RelationAssemblePouvoirJudiciaire,
      NbreDeDitProductionsParlement: socioP.NbreDeDitProductionsParlement,
      NbreArreteProduitGourneur: socioP.NbreArreteProduitGourneur,
      RelationEntreETDETD: socioP.RelationEntreETDETD,
      RelationAutoriteEtSocieteCivile: socioP.RelationAutoriteEtSocieteCivile,
      RelationOfficielEtMedia: socioP.RelationOfficielEtMedia,
      ProgrammeDev: socioP.ProgrammeDev,
      Budgetpart: socioP.Budgetpart,
      RapportGeneralSocio: socioP.RapportGeneralSocio,
      Province: socioP.Province,
      // Territoire: economie.Territoire,
      CommunaleUrbain: socioP.CommunaleUrbain,
      CheferieSecteur: socioP.CheferieSecteur
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
