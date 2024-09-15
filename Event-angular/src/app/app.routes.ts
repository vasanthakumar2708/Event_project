import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AnnexureformComponent } from './annexureform/annexureform.component';
import { AudioComponent } from './audio/audio.component';
import { Component } from '@angular/core';
import { AccessoriesComponent } from './accessories/accessories.component';
import { PhotographyComponent } from './photography/photography.component';
import { VenueComponent } from './venue/venue.component';
import { LocaltransportComponent } from './localtransport/localtransport.component';
import { ExternaltransportComponent } from './externaltransport/externaltransport.component';
import { HostelComponent } from './hostel/hostel.component';
import { InternaltransportComponent } from './internaltransport/internaltransport.component';

export const routes: Routes = [
    {path:'', component: LoginComponent },
    { path: 'frontpage', component: FrontpageComponent },
  { path: 'annexure', component: AnnexureformComponent },
  {path: 'audio', component: AudioComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'photography', component: PhotographyComponent},
  {path: 'venue', component: VenueComponent},
  {path: 'localtransport', component: LocaltransportComponent},
  {path: 'externaltransport', component: ExternaltransportComponent},
  {path: 'hostel', component: HostelComponent},
  {path: 'internaltransport', component: InternaltransportComponent}
];
