import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TasksetupComponent } from './components/tasksetup/tasksetup.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatFormFieldModule, MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule, MatSelectModule, MatIconModule, MatTableModule, MatPaginatorModule, MatCardModule,
  MatListModule, MatSlideToggleModule, MatListItem} from '@angular/material';
import { MeterlistComponent } from './components/meterlist/meterlist.component';
import { GrabberComponent } from './components/grabber/grabber.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeterconfigComponent } from './components/meterconfig/meterconfig.component';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
import { ImportmaillistComponent } from './components/importmaillist/importmaillist.component';
import { ControlpanelComponent } from './components/controlpanel/controlpanel.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { SearchComponent } from './components/search/search.component';
import { AlarmlistComponent } from './components/alarmlist/alarmlist.component';
import { UrllistComponent } from './components/urllist/urllist.component';
import { TaskrunComponent } from './components/taskrun/taskrun.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksetupComponent,
    MeterlistComponent,
    GrabberComponent,
    MeterconfigComponent,
    ContactlistComponent,
    ImportmaillistComponent,
    ControlpanelComponent,
    TasklistComponent,
    SearchComponent,
    AlarmlistComponent,
    UrllistComponent,
    TaskrunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTableModule, MatPaginatorModule,
    MatGridListModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule,
    MatDatepickerModule, MatNativeDateModule, MatListModule, MatSlideToggleModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
