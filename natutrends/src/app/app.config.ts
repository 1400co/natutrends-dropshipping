import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { PixelModule } from 'ngx-multi-pixel';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation()),
     provideClientHydration(),
      importProvidersFrom(PixelModule.forRoot({ enabled: true, pixelId: ["700123764765"] }))
    ],

};
