import { Component, OnInit } from '@angular/core';
import {LocatService} from '../../controller/service/locat.service';
import {Location} from '../../controller/model/locat.model';
import {LocationDoc} from '../../controller/model/locat-doc.model';


@Component({
  selector: 'app-locat-create',
  templateUrl: './locat-create.component.html',
  styleUrls: ['./locat-create.component.css']
})
export class LocatCreateComponent implements OnInit {

  constructor(private locatService: LocatService) { }

  get locat(): Location {
    return this.locatService.location;
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public save(){
    return this.locatService.save();
  }

  // tslint:disable-next-line:typedef
  public Validatesave(){
    return this.locatService.Validatesave();
  }


}
