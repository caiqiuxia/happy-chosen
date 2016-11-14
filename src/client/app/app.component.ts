import { Component } from '@angular/core';
import { Config } from './shared/index';
import './operators';
import { Router, ActivatedRoute, Params, RouterState } from '@angular/router';

/**
 * This class represents the main application component.
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
