import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { EventResolver } from '../core/resolver/event.resolver';
import { conferenceResolver } from '../core/resolver/conference.resolver';

const routes: Routes = [
    { path: 'about', component: AboutComponent, data: { breadcrumb: 'About' } },
    { path: 'directors-message', component: DirectorsMessageComponent, data: { breadcrumb: 'Director’s Message' } },
    { path: 'work-with-bet-medical', component: WorkBetMedicalComponent, data: { breadcrumb: 'Work with Bet Medical' }},
    { path: 'services-support', component: ServicesSupportComponent, data: { breadcrumb: 'Services & Support' } },
    { path: 'submit-cv-online', component: SubmitCvOnlineComponent, data: { breadcrumb: 'Submit CV Online' } },
    { path: 'contact-us', component: ContactUsComponent, data: { breadcrumb: 'Contact Us' } },
    { path: 'events', component: EventsComponent, data: { breadcrumb: 'Events' } },
    { path: 'conferences', component: ConferencesComponent, data: { breadcrumb: 'Conferences' } },
    { path: 'events-detail/:id', component: EventsDetailsComponent, resolve:{event: EventResolver},  data: { breadcrumb: (data: any) => `${data.event.name}` } },
    { path: 'conferences-detail/:id', component: ConferencesDetailsComponent, resolve:{event: conferenceResolver},  data: { breadcrumb: (data: any) => `${data.event.name}` } }
];
  
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }

