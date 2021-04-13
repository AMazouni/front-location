import { Component, OnInit } from '@angular/core';
import {Location} from '../../controller/model/locat.model';
import {LocatService} from '../../controller/service/locat.service';

@Component({
  selector: 'app-locat-doc-list',
  templateUrl: './locat-doc-list.component.html',
  styleUrls: ['./locat-doc-list.component.css']
})
export class LocatDocListComponent implements OnInit {

  constructor(private locatService: LocatService) { }

  get locat(): Location {
    return this.locatService.location;
  }

  ngOnInit(): void {
  }

}
