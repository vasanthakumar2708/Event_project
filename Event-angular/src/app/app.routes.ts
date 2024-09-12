import { Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AnnexureformComponent } from './annexureform/annexureform.component';
import { AudioComponent } from './audio/audio.component';
import { Component } from '@angular/core';
import { AccessoriesComponent } from './accessories/accessories.component';
import { PhotographyComponent } from './photography/photography.component';

export const routes: Routes = [

    { path: '', component: FrontpageComponent },
  { path: 'annexure', component: AnnexureformComponent },
  {path: 'audio', component: AudioComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'photography', component: PhotographyComponent}
];
