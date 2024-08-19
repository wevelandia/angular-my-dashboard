import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
/* Esta es la configuración Global de Angular en versiones superiores a la 17 para trabajo con Standalone */
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
