import { Injectable } from '@angular/core';
import {Location} from '../model/locat.model';
import {HttpClient} from '@angular/common/http';
import {LocationDoc} from '../model/locat-doc.model';
import {Documents} from '../model/document.model';

@Injectable({
  providedIn: 'root'
})
export class LocatService {

  private API = 'http://localhost:8036/gestion-biblio/Location';
  private API2 = 'http://localhost:8036/gestion-biblio/LocationDoc';
  // tslint:disable-next-line:variable-name
  private _location: Location;
  // tslint:disable-next-line:variable-name
  private _locatDoc: LocationDoc;
  // tslint:disable-next-line:variable-name
  private _locatDocs: Array<LocationDoc>;
  // tslint:disable-next-line:variable-name
  private _locations: Array<Location>;


// tslint:disable-next-line:variable-name
  private _document: Documents;
  // tslint:disable-next-line:variable-name
  public _index: number;

  // tslint:disable-next-line:typedef
  public update(index: number, locat: Location){
    this.location = this.clone(locat);
    this._index = index;
  }

  // tslint:disable-next-line:typedef
  public  deleteByRefFromView(location: Location){
    const index = this.locations.findIndex(locat => locat.ref === location.ref);
    if (index !== -1){
      this.locations.splice(index, 1);
    }
  }

  // tslint:disable-next-line:typedef
  public deleteByRef(location: Location) {
    this.http.delete<number>(this.API + '/locationref-delete/' + location.ref).subscribe(
      data => {
        console.log('ha data : ' + data);
        this.deleteByRefFromView(location);
      }
    );
  }

    // tslint:disable-next-line:typedef
  public addLocatDoc(){

    // this.locationDoc.id = this.locationDocs.length + 1;
    // console.log(this.locationDoc.id);
    this.location.total += this.locationDoc.qte * this.locationDoc.prixUnitaire;
    this.location.locationDocs.push(this.cloneDoc(this.locationDoc));
    this.locationDoc = null;
  }

  // tslint:disable-next-line:typedef
  public save(){

    // console.log(location);
    if (this.location.id == null) {
      console.log(this.location);
      console.log(this.location.id);
      this.http.post<number>(this.API + '/', this.location).subscribe(
        data => {
          if (data > 0){
            this.locations.push(this.location);
          }
          else { alert('error :' + data); }
        }
      );
    }else {
      this.locations[this._index] = this.clone(this.location);
    }
    this.location = null;
  }

  // tslint:disable-next-line:typedef
  public Validatesave(): boolean{
    return this.location.ref != null && this.location.locationDocs.length > 0;
  }


  constructor( private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  public findAll(){
    this.http.get<Array<Location>>(this.API + '/').subscribe(
      data => { this.locations = data; }
    );
  }

  get location(): Location {
    if (this._location == null){
      this._location = new Location();
    }
    return this._location;
  }

  set location(value: Location) {
    this._location = value;
  }

  get locations(): Array<Location> {
    if (this._locations == null){
      this._locations = new Array<Location>();
    }
    return this._locations;
  }

  set locations(value: Array<Location>) {
    this._locations = value;
  }

  get locationDocs(): Array<LocationDoc> {
    if (this._locatDocs == null){
      this._locatDocs = new Array<LocationDoc>();
    }
    return this._locatDocs;
  }

  set locationDocs(value: Array<LocationDoc>) {
    this._locatDocs = value;
  }

  get locationDoc(): LocationDoc {
    if (this._locatDoc == null){
      this._locatDoc = new LocationDoc();
    }
    return this._locatDoc;
  }

  set locationDoc(value: LocationDoc) {
    this._locatDoc = value;
  }


  // tslint:disable-next-line:typedef
  private clone(locat: Location){
    const myClone = new Location();
    myClone.ref = locat.ref;
    // myClone.total = locat.total;
    // myClone.totalPaye = locat.totalPaye;
    myClone.locationDocs = locat.locationDocs;
    myClone.dateLocation = locat.dateLocation;
    return myClone;
  }
  // tslint:disable-next-line:typedef
  private cloneDoc(locatDoc: LocationDoc){
    const myClone = new LocationDoc();

    myClone.ref = locatDoc.ref;
    myClone.qte = locatDoc.qte;
    myClone.prixUnitaire = locatDoc.prixUnitaire;
    // myClone.prixTotal = locatDoc.prixTotal;
    myClone.documents = locatDoc.documents;
    return myClone;
  }

  // tslint:disable-next-line:typedef
  public findByLocationRef(location: Location){
    this.http.get<Array<LocationDoc>>(this.API2 + '/location/locationdocref/' + location.ref).subscribe(
      data => {
        this.location.locationDocs = data;
      }
    );
  }

}
