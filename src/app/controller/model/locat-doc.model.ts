import {Documents} from './document.model';

export class LocationDoc {
  //public id: number;
  public ref: string;
  public qte: number;
  public prixUnitaire: number;
  public prixTotal: number;
  public documents: Documents;
}
