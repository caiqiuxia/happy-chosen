import { Component } from '@angular/core';
import { Config } from './shared/index';
import './operators';
import { Router, ActivatedRoute, Params, RouterState } from '@angular/router';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(private router: Router) {
    console.log('Environment config', Config);
  }
  showTabbar(){
    console.log(this.router.url);
    if(this.router.url === '/'){
      return false;
    }else{
      return true;
    }
  }
}
