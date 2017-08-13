import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const env = environment.production || process.env.FB.production;

if ( env ) enableProdMode();

platformBrowserDynamic()
  .bootstrapModule( AppModule )
  .catch( err => console.error(err) );