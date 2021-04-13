import { Component, OnInit } from '@angular/core';
import {LocationDoc} from '../../controller/model/locat-doc.model';
import {LocatService} from '../../controller/service/locat.service';
import {Documents} from '../../controller/model/document.model';

@Component({
  selector: 'app-locat-doc-create',
  templateUrl: './locat-doc-create.component.html',
  styleUrls: ['./locat-doc-create.component.css']
})
export class LocatDocCreateComponent implements OnInit {

  constructor(private locatService: LocatService) { }

  get locatDoc(): LocationDoc {
    return this.locatService.locationDoc;
  }

  ngOnInit(): void {
    this.locatDoc.documents = new Documents()
  }

  // tslint:disable-next-line:typedef
  public addLocatDoc(){
    return this.locatService.addLocatDoc();
  }

}
