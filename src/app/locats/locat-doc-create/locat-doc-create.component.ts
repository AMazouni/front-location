import { Component, OnInit } from '@angular/core';
import {LocationDoc} from '../../controller/model/locat-doc.model';
import {LocatService} from '../../controller/service/locat.service';

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
  }

  // tslint:disable-next-line:typedef
  public addLocatDoc(){
    return this.locatService.addLocatDoc();
  }

}
