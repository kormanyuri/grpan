import {config} from '../config/config';

export default class LegalPage {


  constructor(slug, locale){
    this.locale = locale;
    this.slug = slug;
  }

  loadItems(callback){
    fetch(config.backendUrl + 'admin/rest/legal-pages?locale=' + this.locale)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

  update(callback){
    fetch(config.backendUrl + 'admin/rest/legal-page/show-by-slug?slug=' + this.slug + '&locale=' + this.locale)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

}
