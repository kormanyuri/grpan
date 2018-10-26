import {config} from '../config/config';

export default class Setting {



  update(callback){
    fetch(config.backendUrl + 'admin/rest/setting')
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

}
