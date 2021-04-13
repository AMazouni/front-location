import { Component, OnInit } from '@angular/core';
import {LocatService} from '../../controller/service/locat.service';
import {Location} from '../../controller/model/locat.model';

@Component({
  selector: 'app-locat-list',
  templateUrl: './locat-list.component.html',
  styleUrls: ['./locat-list.component.css']
})
export class LocatListComponent implements OnInit {

  constructor(private locatService: LocatService) { }


  // tslint:disable-next-line:typedef
  public update(index: number, locat: Location) {
    return this.locatService.update(index, locat);
  }

  // tslint:disable-next-line:typedef
  public deleteByRef(location: Location){
    return this.locatService.deleteByRef(location);
  }

  // tslint:disable-next-line:typedef
  public findByLocationRef(location: Location){
    return this.locatService.findByLocationRef(location);
  }

  get locats(): Array<Location> {
    return this.locatService.locations;
  }
  get locat(): Location{
    return this.locatService.location;
  }

  ngOnInit(): void {
    this.locatService.findAll();
  }


}
