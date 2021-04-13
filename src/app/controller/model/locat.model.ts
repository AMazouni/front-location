import {LocationDoc} from './locat-doc.model';

export class Location {
  public id: number;
  public ref: string;
  public total: number;
  public totalPaye: number;
  public dateLocation: Date;
  public locationDocs = new Array<LocationDoc>();

  constructor() {
    this.total = 0;
    this.totalPaye = 0;
  }
}
