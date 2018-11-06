import {config} from '../config/config';
import queryString from 'query-string';

export default class PublicForm {

  constructor(data){
    this.data = data;
  }

  send(callback){
    fetch(config.backendUrl + 'admin/rest/public-form/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(this.data)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

}
