import {config} from '../config/config';
export default class GPGPerk {


  constructor(locale){
    this.locale = locale;
  }

  update(callback){
    fetch(config.backendUrl + 'admin/rest/gpg-perks?locale=' + this.locale)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

}
