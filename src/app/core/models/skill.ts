export class Skill {
    id: string; // ID en format hexadécimal
    name: string; // Nom de la compétence
    profession: string; // Profession associée
    statistic: string; // Statistique associée
    campaign: string; // Campagne associée
    description: string; // Description de la compétence
  
    constructor(
      id: string,
      name: string,
      profession: string,
      statistic: string,
      campaign: string,
      description: string
    ) {
      this.id = id;
      this.name = name;
      this.profession = profession;
      this.statistic = statistic;
      this.campaign = campaign;
      this.description = description;
    }
  }