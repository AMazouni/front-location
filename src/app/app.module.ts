import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocatsComponent } from './locats/locats.component';
import { LocatCreateComponent } from './locats/locat-create/locat-create.component';
import { LocatListComponent } from './locats/locat-list/locat-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LocatDocCreateComponent } from './locats/locat-doc-create/locat-doc-create.component';
import { LocatDocListComponent } from './locats/locat-doc-list/locat-doc-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LocatsComponent,
    LocatCreateComponent,
    LocatListComponent,
    LocatDocCreateComponent,
    LocatDocListComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
