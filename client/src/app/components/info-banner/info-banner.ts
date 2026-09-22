import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorAirplane,
  phosphorGlobeHemisphereWest,
  phosphorShieldCheck,
  phosphorSmiley,
} from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-info-banner',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({
      phosphorAirplane,
      phosphorGlobeHemisphereWest,
      phosphorShieldCheck,
      phosphorSmiley,
    }),
  ],
  templateUrl: './info-banner.html',
})
export class InfoBanner {}
