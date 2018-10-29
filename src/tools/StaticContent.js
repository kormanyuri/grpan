import {config} from '../config/config';

export default class StaticContent {


  constructor(route, locale){
    this.route = route;
    this.locale = locale;
  }

  update(callback){
    fetch(config.backendUrl + 'admin/rest/static-content?route=' + this.route + '&locale=' + this.locale)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

}
