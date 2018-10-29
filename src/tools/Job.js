import {config} from '../config/config';
export default class Job {


  constructor(locale){
    this.locale = locale;
  }

  update(callback){
    fetch(config.backendUrl + 'admin/rest/job?locale=' + this.locale)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

  updateJoongle(callback) {
    fetch('https://www.welcomekit.co/api/v1/embed?organization_reference=' + config.organizationReference)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

}
