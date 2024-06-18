import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { DirectorsMessageComponent } from './directors-message/directors-message.component';
import { WorkBetMedicalComponent } from './work-bet-medical/work-bet-medical.component';
import { ServicesSupportComponent } from './services-support/services-support.component';
import { SubmitCvOnlineComponent } from './submit-cv-online/submit-cv-online.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsComponent } from './events/events.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { ConferencesDetailsComponent } from './conferences/conferences-details/conferences-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    DirectorsMessageComponent,
    WorkBetMedicalComponent,
    ServicesSupportComponent,
    SubmitCvOnlineComponent,
    ContactUsComponent,
    EventsComponent,
    ConferencesComponent,
    EventsDetailsComponent,
    ConferencesDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
