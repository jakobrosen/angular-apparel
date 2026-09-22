import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorChatCircleDots,
  phosphorDeviceMobile,
  phosphorEnvelopeSimple,
  phosphorFacebookLogo,
  phosphorInstagramLogo,
  phosphorMapPin,
  phosphorPinterestLogo,
  phosphorTiktokLogo,
  phosphorYoutubeLogo,
} from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgIcon],
  providers: [
    provideIcons({
      phosphorChatCircleDots,
      phosphorDeviceMobile,
      phosphorEnvelopeSimple,
      phosphorFacebookLogo,
      phosphorInstagramLogo,
      phosphorMapPin,
      phosphorPinterestLogo,
      phosphorTiktokLogo,
      phosphorYoutubeLogo,
    }),
  ],
  templateUrl: './footer.html',
})
export class Footer {}
