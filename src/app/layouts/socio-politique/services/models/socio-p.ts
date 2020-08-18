export class SocioP {
    id?: string;
    EnseignantMP?: number; // OUI et NON
    EnseignantMNP?: number;
    EndeignantNUP?: number;
    EndeignantNUNP?: number;

    NbreEcole?: number;  // par Quartier/Cheferie/secteur
    FraisFonctionnementEcole?: string;

    // Revendication on reprend les chiffre des enseignant non payé et nouvelle unite non payé
    Revendication?: string;

    StructureSanitaireAccessiblePopulation?: string;
    PopulationRecourMedecinTraditionnel?: string;
    JeuneAccesStructureSanitaire?: string;

    // Politique
    RelationAssembleGouvProv?: string;
    RelationGouvernementOrganeJudiciare?: string;
    RelationAssemblePouvoirJudiciaire?: string;

    NbreDeDitProductionsParlement?: number;
    NbreArreteProduitGourneur?: number;

    RelationEntreETDETD?: string;
    RelationAutoriteEtSocieteCivile?: string;
    RelationOfficielEtMedia?: string;

    ProgrammeDev?: string;
    Budgetpart?: string;

    RapportGeneralSocio?: string;

    Province?: string;
    CommunaleUrbain?: string;
    CheferieSecteur?: string;
    Created?: any;
    agentId?: string;
    // ecoImageUrl?: string;
}
