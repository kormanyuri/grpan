import {config} from '../config/config';
export default class GameCategory {

  update(callback){
    fetch(config.backendUrl + 'admin/rest/game-category')
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

}
